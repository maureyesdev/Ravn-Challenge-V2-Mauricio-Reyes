import { CartFindManyWhere } from '@quickcart/users/domain/repositories/types/cart-find-many-where';

export type CartFindManyArgs = {
  where?: CartFindManyWhere;
  take?: number;
  page?: number;
};
