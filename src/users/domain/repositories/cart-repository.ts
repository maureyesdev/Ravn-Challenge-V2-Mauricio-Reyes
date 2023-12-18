import { Cart } from '@quickcart/users/domain/entities/cart';
import { CartCheckoutArgs } from '@quickcart/users/domain/repositories/types/cart-checkout-args';
import { CartCreateOneArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-args';
import { CartCreateOneCartItemArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-cart-item-args';
import { CartFindOneArgs } from '@quickcart/users/domain/repositories/types/cart-find-one-args';
import { CartUpdateOneArgs } from '@quickcart/users/domain/repositories/types/cart-update-one-args';

export abstract class CartRepository {
  abstract createOne(args: CartCreateOneArgs): Promise<Cart>;
  abstract findOne(args: CartFindOneArgs): Promise<Cart | null>;
  abstract updateOneCart(args: CartUpdateOneArgs): Promise<Cart>;
  abstract findActiveCartByUserId(userId: number): Promise<Cart | null>;
  abstract createOneCartItem(args: CartCreateOneCartItemArgs): Promise<unknown>;
  abstract checkout(args: CartCheckoutArgs): Promise<boolean>;
}
