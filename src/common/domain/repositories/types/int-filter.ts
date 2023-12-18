import { NestedIntFilter } from '@quickcart/common/domain/repositories/types/nested-int-filter';

export type IntFilter = {
  equals?: number;
  in?: number[];
  notIn?: number[];
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
  not?: NestedIntFilter;
};
