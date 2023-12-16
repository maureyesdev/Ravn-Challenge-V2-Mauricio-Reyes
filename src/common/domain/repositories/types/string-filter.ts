import { NestedStringFilter } from '@quickcart/common/domain/repositories/types/nested-string-filter';
import { StringFilterMode } from '@quickcart/common/domain/repositories/types/string-filter-mode';

export type StringFilter = {
  equals?: string;
  in?: string[];
  notIn?: string[];
  lt?: string;
  lte?: string;
  gt?: string;
  gte?: string;
  contains?: string;
  startsWith?: string;
  endsWith?: string;
  mode?: StringFilterMode;
  not?: NestedStringFilter;
};
