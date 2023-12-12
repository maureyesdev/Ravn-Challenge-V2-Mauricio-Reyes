import { Injectable } from '@nestjs/common';
import { CreateProductCommand } from '@quickcart/products/application/commands/create-product/create-product-command';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';

@Injectable()
export class CreateProductCommandHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const product = Product.create({ data: command.data });
    const newProduct = await this.productRepository.createOne({
      data: product,
    });
    return newProduct;
  }
}
