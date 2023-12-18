import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCategoryCommandHandler } from '@quickcart/products/application/commands/create-category/create-category-command-handler';
import { CreateCategoryArgs } from '@quickcart/products/infrastructure/ins/gql/args/create-category.args';
import { CategoryModel } from '@quickcart/products/infrastructure/ins/gql/models/category.model';

@Resolver(CategoryModel)
export class CategoriesResolver {
  constructor(
    private readonly createCategoryCommandHandler: CreateCategoryCommandHandler,
  ) {}

  @Mutation(() => CategoryModel)
  createCategory(@Args() args: CreateCategoryArgs) {
    this.createCategoryCommandHandler.execute(args);
  }
}
