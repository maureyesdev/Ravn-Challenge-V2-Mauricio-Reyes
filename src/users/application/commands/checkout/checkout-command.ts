import { User } from '@quickcart/users/domain/entities/user';
import { CartCheckoutArgs } from '@quickcart/users/domain/repositories/types/cart-checkout-args';

export type CheckoutCommand = CartCheckoutArgs & {
  user: Omit<User, 'password'>;
};
