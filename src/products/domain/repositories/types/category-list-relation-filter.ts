import { CategoryWhere } from '@quickcart/products/domain/repositories/types/category-where-input';

export type CategoryListRelationFilter = {
  every?: CategoryWhere;
  some?: CategoryWhere;
  none?: CategoryWhere;
};
