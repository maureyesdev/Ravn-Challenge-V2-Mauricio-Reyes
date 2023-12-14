import { User } from '@quickcart/users/domain/entities/user';

export type SignInQuery = {
  user: Omit<User, 'password'>;
};
