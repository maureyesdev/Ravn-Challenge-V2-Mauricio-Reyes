import { ArgsType, Field } from '@nestjs/graphql';
import { CategoryCreateOneArgs } from '@quickcart/products/domain/repositories/types/category-create-one-args';
import { CreateCategoryDataInput } from '@quickcart/products/infrastructure/ins/gql/inputs/create-category-data.input';

@ArgsType()
export abstract class CreateCategoryArgs implements CategoryCreateOneArgs {
  @Field(() => CreateCategoryDataInput)
  data: CreateCategoryDataInput;
}
