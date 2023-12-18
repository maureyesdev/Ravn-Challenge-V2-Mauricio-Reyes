import { Injectable } from '@nestjs/common';
import { GetProductQuery } from '@quickcart/products/application/queries/get-product/get-product-query';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

@Injectable()
export class GetProductQueryHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  execute(query: GetProductQuery) {
    const foundProduct = this.productRepository.findOne({ where: query.where });
    if (!foundProduct) {
      return null;
    }
    return foundProduct;
  }
}
