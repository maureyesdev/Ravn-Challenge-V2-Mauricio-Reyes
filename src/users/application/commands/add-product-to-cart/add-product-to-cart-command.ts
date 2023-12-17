import { CartCreateOneCartItemArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-cart-item-args';

export type AddProductToCartCommand = CartCreateOneCartItemArgs & {
  userId: number;
};
