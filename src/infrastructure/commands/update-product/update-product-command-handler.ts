import { Injectable } from '@nestjs/common';
import { UpdateProductCommand } from '@quickcart/infrastructure/commands/update-product/update-product-command';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

@Injectable()
export class UpdateProductCommandHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: UpdateProductCommand) {
    const foundProduct = await this.productRepository.findOne({
      where: command.where,
    });
    if (!foundProduct) {
      throw new Error('Product not found');
    }
    const updatedProduct = await this.productRepository.updateOne({
      where: command.where,
      data: command.data,
    });
    return updatedProduct;
  }
}
