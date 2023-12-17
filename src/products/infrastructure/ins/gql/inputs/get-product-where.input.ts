import { Field, InputType, Int } from '@nestjs/graphql';
import { ProductFindOneWhere } from '@quickcart/products/domain/repositories/types/product-find-one-where';

@InputType({ isAbstract: true })
export abstract class GetProductWhereInput implements ProductFindOneWhere {
  @Field(() => Int)
  id: number;
}
