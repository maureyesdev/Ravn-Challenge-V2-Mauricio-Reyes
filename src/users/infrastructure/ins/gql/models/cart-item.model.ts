import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CartItem } from '@quickcart/users/domain/entities/cart-item';

@ObjectType({ isAbstract: true })
export abstract class CartItemModel implements CartItem {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  quantity: number;

  @Field(() => Int)
  cartId: number;
}
