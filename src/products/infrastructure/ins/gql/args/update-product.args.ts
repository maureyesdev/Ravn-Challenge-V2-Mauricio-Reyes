import { ArgsType, Field } from '@nestjs/graphql';
import { ProductUpdateOneArgs } from '@quickcart/products/domain/repositories/types/product-update-one-args';
import { GetProductWhereInput } from '@quickcart/products/infrastructure/ins/gql/inputs/get-product-where.input';
import { UpdateProductDataInput } from '@quickcart/products/infrastructure/ins/gql/inputs/product-update-data.input';

@ArgsType()
export abstract class UpdateProductArgs implements ProductUpdateOneArgs {
  @Field(() => UpdateProductDataInput)
  data: UpdateProductDataInput;

  @Field(() => GetProductWhereInput)
  where: GetProductWhereInput;
}
