import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Product } from '@quickcart/products/domain/entities/product';

@ObjectType({ isAbstract: true })
export abstract class ProductModel implements Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => String)
  image: string;

  @Field(() => Int)
  stock: number;

  @Field()
  isEnabled: boolean;
}
