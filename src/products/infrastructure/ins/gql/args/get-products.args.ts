import { ArgsType, Field, Int } from '@nestjs/graphql';
import { ProductFindManyArgs } from '@quickcart/products/domain/repositories/types/product-find-many-args';
import { GetTenantsWhereInput } from '@quickcart/products/infrastructure/ins/gql/inputs/get-products-where.input';

@ArgsType()
export abstract class GetProductsArgs implements ProductFindManyArgs {
  @Field(() => GetTenantsWhereInput, { nullable: true })
  where?: GetTenantsWhereInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  page?: number;
}
