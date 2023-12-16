import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductCreateOneArgs } from '@quickcart/products/domain/repositories/types/product-create-one-args';
import { ProductFindManyArgs } from '@quickcart/products/domain/repositories/types/product-find-many-args';

export abstract class ProductRepository {
  abstract createOne(args: ProductCreateOneArgs): Promise<Product>;
  abstract findMany(args: ProductFindManyArgs): Promise<PaginatedData<Product>>;
}
