import { ArgsType, Field } from '@nestjs/graphql';
import { FileUpload, GraphQLUpload } from 'graphql-upload-ts';
import { ProductCreateOneArgs } from '@quickcart/products/domain/repositories/types/product-create-one-args';
import { CreateProductDataInput } from '@quickcart/products/infrastructure/ins/gql/inputs/create-product-data.input';

@ArgsType()
export abstract class CreateProductArgs implements ProductCreateOneArgs {
  @Field(() => CreateProductDataInput)
  data: CreateProductDataInput;

  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}
