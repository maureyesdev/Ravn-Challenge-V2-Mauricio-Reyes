import { CartStatus } from '@prisma/client';
import { FloatFieldUpdate } from '@quickcart/common/domain/repositories/types/float-field-update';

export type CartUpdateOneData = {
  status?: {
    set: keyof typeof CartStatus;
  };
  total?: FloatFieldUpdate;
};
