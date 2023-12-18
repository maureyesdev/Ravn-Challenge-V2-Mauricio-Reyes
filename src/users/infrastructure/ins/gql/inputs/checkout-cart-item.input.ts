import { Field, InputType, Int } from '@nestjs/graphql';
import { CartItem } from '@quickcart/users/domain/entities/cart-item';

@InputType({ isAbstract: true })
export abstract class CheckoutCartItemInput implements Omit<CartItem, 'id'> {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  cartId: number;
}
