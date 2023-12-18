import { Field, InputType, Int } from '@nestjs/graphql';
import { CartItemCreateData } from '@quickcart/users/domain/entities/cart-item';

@InputType({ isAbstract: true })
export abstract class CreateCartItemInput implements CartItemCreateData {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int, { nullable: true })
  cartId?: number;
}
