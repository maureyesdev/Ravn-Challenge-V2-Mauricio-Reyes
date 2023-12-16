import { Field, InputType } from '@nestjs/graphql';
import { ProductFindManyWhere } from '@quickcart/products/domain/repositories/types/product-find-many-where';
import { CategoryListRelationFilterInput } from '@quickcart/products/infrastructure/ins/gql/inputs/category-list-relation-filter.input';

@InputType({ isAbstract: true })
export abstract class GetTenantsWhereInput implements ProductFindManyWhere {
  @Field(() => CategoryListRelationFilterInput, { nullable: true })
  categories?: CategoryListRelationFilterInput;
}
