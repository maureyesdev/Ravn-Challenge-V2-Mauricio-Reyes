import { IntFilter } from '@quickcart/common/domain/repositories/types/int-filter';
import { StringFilter } from '@quickcart/common/domain/repositories/types/string-filter';

export type CategoryWhere = {
  id?: IntFilter;
  name?: StringFilter;
};
