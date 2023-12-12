import { ArgsType, Field } from '@nestjs/graphql';
import { ProductCreateOneArgs } from '@quickcart/products/domain/entities/repositories/types/product-create-one-args';
import { CreateProductDataInput } from '@quickcart/products/infrastructure/ins/gql/inputs/create-product-data.input';

@ArgsType()
export abstract class CreateProductArgs implements ProductCreateOneArgs {
  @Field(() => CreateProductDataInput)
  data: CreateProductDataInput;
}
