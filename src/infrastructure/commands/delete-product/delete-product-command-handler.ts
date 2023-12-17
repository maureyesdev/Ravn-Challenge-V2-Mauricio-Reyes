import { Injectable } from '@nestjs/common';
import { DeleteProductCommand } from '@quickcart/infrastructure/commands/delete-product/delete-product-command';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

@Injectable()
export class DeleteProductCommandHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(command: DeleteProductCommand) {
    const deletedProduct = await this.productRepository.deleteOne({
      where: command.where,
    });
    return deletedProduct;
  }
}
