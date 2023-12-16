import { Field, InputType } from '@nestjs/graphql';
import { CategoryListRelationFilter } from '@quickcart/products/domain/repositories/types/category-list-relation-filter';
import { CategoryWhereInput } from '@quickcart/products/infrastructure/ins/gql/inputs/category-where.input';

@InputType({ isAbstract: true })
export abstract class CategoryListRelationFilterInput
  implements CategoryListRelationFilter
{
  @Field(() => CategoryWhereInput, { nullable: true })
  every?: CategoryWhereInput;

  @Field(() => CategoryWhereInput, { nullable: true })
  some?: CategoryWhereInput;

  @Field(() => CategoryWhereInput, { nullable: true })
  none?: CategoryWhereInput;
}
