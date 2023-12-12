import { Field, Float, InputType, Int } from '@nestjs/graphql';
import { ProductCreateData } from '@quickcart/products/domain/entities/product';

@InputType({ isAbstract: true })
export abstract class CreateProductDataInput implements ProductCreateData {
  @Field()
  name: string;

  @Field(() => Float, { nullable: false })
  price: number;

  @Field()
  image: string;

  @Field(() => Int, { nullable: false })
  stock: number;

  @Field({ nullable: true })
  isEnabled?: boolean;
}
