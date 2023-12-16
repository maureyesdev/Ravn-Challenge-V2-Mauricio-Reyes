import { Injectable } from '@nestjs/common';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { GetProductsQuery } from '@quickcart/products/application/queries/get-products/get-products-query';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

@Injectable()
export class GetProductsQueryHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  async execute(query: GetProductsQuery): Promise<PaginatedData<Product>> {
    const paginatedProducts = await this.productRepository.findMany({
      where: query.where,
    });
    return paginatedProducts;
  }
}
