import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductCreateOneArgs } from '@quickcart/products/domain/repositories/types/product-create-one-args';
import { ProductDeleteOneArgs } from '@quickcart/products/domain/repositories/types/product-delete-one-args';
import { ProductFindManyArgs } from '@quickcart/products/domain/repositories/types/product-find-many-args';
import { ProductFindOneArgs } from '@quickcart/products/domain/repositories/types/product-find-one-args';
import { ProductUpdateOneArgs } from '@quickcart/products/domain/repositories/types/product-update-one-args';

export abstract class ProductRepository {
  abstract createOne(args: ProductCreateOneArgs): Promise<Product>;
  abstract findMany(args: ProductFindManyArgs): Promise<PaginatedData<Product>>;
  abstract findOne(args: ProductFindOneArgs): Promise<Product | null>;
  abstract updateOne(args: ProductUpdateOneArgs): Promise<Product>;
  abstract deleteOne(args: ProductDeleteOneArgs): Promise<Product>;
}
