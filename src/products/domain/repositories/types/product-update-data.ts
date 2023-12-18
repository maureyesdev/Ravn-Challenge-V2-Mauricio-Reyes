import { BooleanFieldUpdate } from '@quickcart/common/domain/repositories/types/boolean-field-update';
import { FloatFieldUpdate } from '@quickcart/common/domain/repositories/types/float-field-update';
import { IntFieldUpdate } from '@quickcart/common/domain/repositories/types/int-field-update';
import { StringFieldUpdate } from '@quickcart/common/domain/repositories/types/string-field-update';

export type ProductUpdateData = {
  name?: StringFieldUpdate;
  price?: FloatFieldUpdate;
  image?: StringFieldUpdate;
  stock?: IntFieldUpdate;
  isEnabled?: BooleanFieldUpdate;
  categories?: number[];
};
