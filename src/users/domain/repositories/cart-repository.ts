import { Cart } from '@quickcart/users/domain/entities/cart';
import { CartCreateOneArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-args';
import { CartCreateOneCartItemArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-cart-item-args';
import { CartFindOneArgs } from '@quickcart/users/domain/repositories/types/cart-find-one-args';

export abstract class CartRepository {
  abstract createOne(args: CartCreateOneArgs): Promise<Cart>;
  abstract findOne(args: CartFindOneArgs): Promise<Cart | null>;
  abstract findActiveCartByUserId(userId: number): Promise<Cart | null>;
  abstract createOneCartItem(args: CartCreateOneCartItemArgs): Promise<unknown>;
}
