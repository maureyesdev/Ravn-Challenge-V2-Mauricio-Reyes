import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Cart, CartStatus } from '@quickcart/users/domain/entities/cart';
import { CartItemModel } from '@quickcart/users/infrastructure/ins/gql/models/cart-item.model';

@ObjectType({ isAbstract: true })
export abstract class CartModel implements Cart {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  userId: number;

  @Field(() => String)
  status: keyof typeof CartStatus;

  @Field(() => [CartItemModel])
  cartItem: CartItemModel[];

  @Field(() => Float)
  total: number;
}
