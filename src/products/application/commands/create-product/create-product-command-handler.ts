import { Injectable } from '@nestjs/common';
import { CustomError } from '@quickcart/common/domain/errors/custom-error';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { CreateProductCommand } from '@quickcart/products/application/commands/create-product/create-product-command';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

@Injectable()
export class CreateProductCommandHandler {
  private cloudImageUrl: string | CustomError;

  constructor(
    private readonly productRepository: ProductRepository,
    private readonly imageUploaderService: ImageUploaderService,
  ) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    try {
      const { createReadStream: imageStream } = await command.image;
      this.cloudImageUrl =
        await this.imageUploaderService.upload(imageStream());
      if (this.cloudImageUrl instanceof CustomError) {
        throw CustomError.InternalServerError('Failed to upload image');
      }
      const product = Product.create({
        data: { ...command.data, image: this.cloudImageUrl },
      });
      const newProduct = await this.productRepository.createOne({
        data: product,
      });
      return newProduct;
    } catch (error) {
      if (typeof this.cloudImageUrl === 'string') {
        // * Means there is an image uploaded already
        // * Need to delete the image from the cloud to avoid unused images
        const imageIdentifier = this.cloudImageUrl.match(/\/([^\/]+)\.\w+$/)[1];
        await this.imageUploaderService.delete(imageIdentifier);
      }

      throw CustomError.InternalServerError('Failed to create product');
    }
  }
}
