import { CartFindOneWhere } from '@quickcart/users/domain/repositories/types/cart-find-one-where';
import { CartUpdateOneData } from '@quickcart/users/domain/repositories/types/cart-update-one-data';

export type CartUpdateOneArgs = {
  data: CartUpdateOneData;
  where: CartFindOneWhere;
};
