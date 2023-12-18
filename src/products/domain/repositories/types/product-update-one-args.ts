import { ProductFindOneWhere } from '@quickcart/products/domain/repositories/types/product-find-one-where';
import { ProductUpdateData } from '@quickcart/products/domain/repositories/types/product-update-data';

export type ProductUpdateOneArgs = {
  data: ProductUpdateData;
  where: ProductFindOneWhere;
};
