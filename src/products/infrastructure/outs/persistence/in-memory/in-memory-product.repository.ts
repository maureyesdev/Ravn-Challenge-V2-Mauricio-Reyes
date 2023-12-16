import { Injectable } from '@nestjs/common';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { ProductCreateOneArgs } from '@quickcart/products/domain/repositories/types/product-create-one-args';
import { ProductFindManyArgs } from '@quickcart/products/domain/repositories/types/product-find-many-args';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  async createOne(_: ProductCreateOneArgs): Promise<Product> {
    throw new Error('Method not implemented.');
  }

  findMany(_: ProductFindManyArgs): Promise<PaginatedData<Product>> {
    throw new Error('Method not implemented.');
  }
}
