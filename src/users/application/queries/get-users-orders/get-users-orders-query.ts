import { IntFilter } from '@quickcart/common/domain/repositories/types/int-filter';
import { StringFilter } from '@quickcart/common/domain/repositories/types/string-filter';

export type GetUsersOrdersQuery = {
  where?: {
    id?: IntFilter;
    email?: StringFilter;
  };
  take?: number;
  page?: number;
};
