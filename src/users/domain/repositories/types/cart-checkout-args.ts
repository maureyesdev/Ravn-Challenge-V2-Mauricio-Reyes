import { CartItem } from '@quickcart/users/domain/entities/cart-item';

export type CartCheckoutArgs = {
  items: Omit<CartItem, 'id'>[];
};
