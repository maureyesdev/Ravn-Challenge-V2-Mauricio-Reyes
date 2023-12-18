import { Field, InputType, Int } from '@nestjs/graphql';
import { BooleanFieldUpdateInput } from '@quickcart/common/infrastructure/ins/gql/boolean-field-update.input';
import { FloatFieldUpdateInput } from '@quickcart/common/infrastructure/ins/gql/float-field-update.input';
import { IntFieldUpdateInput } from '@quickcart/common/infrastructure/ins/gql/int-field-update.input';
import { StringFieldUpdateInput } from '@quickcart/common/infrastructure/ins/gql/string-field-update.input';
import { ProductUpdateData } from '@quickcart/products/domain/repositories/types/product-update-data';

@InputType({ isAbstract: true })
export abstract class UpdateProductDataInput implements ProductUpdateData {
  @Field(() => StringFieldUpdateInput, { nullable: true })
  name: StringFieldUpdateInput;

  @Field(() => FloatFieldUpdateInput, { nullable: true })
  price: FloatFieldUpdateInput;

  @Field(() => StringFieldUpdateInput, { nullable: true })
  image: StringFieldUpdateInput;

  @Field(() => IntFieldUpdateInput, { nullable: true })
  stock: IntFieldUpdateInput;

  @Field(() => BooleanFieldUpdateInput, { nullable: true })
  isEnabled: BooleanFieldUpdateInput;

  @Field(() => [Int], { nullable: true })
  categories: number[];
}
