import { CategoryListRelationFilter } from '@quickcart/products/domain/repositories/types/category-list-relation-filter';

export type ProductFindManyWhere = {
  categories?: CategoryListRelationFilter;
};
