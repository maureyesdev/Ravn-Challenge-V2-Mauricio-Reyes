import { Product } from '@quickcart/products/domain/entities/product';
import { ProductCreateOneArgs } from '@quickcart/products/domain/entities/repositories/types/product-create-one-args';

export abstract class ProductRepository {
  abstract createOne(args: ProductCreateOneArgs): Promise<Product>;
}
