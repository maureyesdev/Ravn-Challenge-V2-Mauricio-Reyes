import { Category } from '@quickcart/products/domain/entities/category';
import { CategoryCreateOneArgs } from '@quickcart/products/domain/repositories/types/category-create-one-args';

export abstract class CategoryRepository {
  abstract createOne(args: CategoryCreateOneArgs): Promise<Category>;
}
