import { ProductFindOneWhere } from '@quickcart/products/domain/repositories/types/product-find-one-where';

export type ProductDeleteOneArgs = {
  where: ProductFindOneWhere;
};
