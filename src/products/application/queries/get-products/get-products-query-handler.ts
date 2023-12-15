import { Injectable } from '@nestjs/common';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';

@Injectable()
export class GetProductsQueryHandler {
  constructor(private readonly productRepository: ProductRepository) {}

  // TODO: missing implementation of the filters (where)
  async execute(): Promise<PaginatedData<Product>> {
    const paginatedProducts = await this.productRepository.findMany();
    return paginatedProducts;
  }
}
