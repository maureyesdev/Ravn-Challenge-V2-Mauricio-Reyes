import { IntFilter } from '@quickcart/common/domain/repositories/types/int-filter';
import { CategoryListRelationFilter } from '@quickcart/products/domain/repositories/types/category-list-relation-filter';

export type ProductFindManyWhere = {
  id?: IntFilter;
  categories?: CategoryListRelationFilter;
};
