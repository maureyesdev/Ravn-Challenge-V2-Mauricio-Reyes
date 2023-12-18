import { ArgsType, Field } from '@nestjs/graphql';
import { ProductFindOneArgs } from '@quickcart/products/domain/repositories/types/product-find-one-args';
import { GetProductWhereInput } from '@quickcart/products/infrastructure/ins/gql/inputs/get-product-where.input';

@ArgsType()
export abstract class GetProductArgs implements ProductFindOneArgs {
  @Field(() => GetProductWhereInput)
  where: GetProductWhereInput;
}
