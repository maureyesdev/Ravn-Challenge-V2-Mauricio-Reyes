import { Pagination } from '@quickcart/common/domain/types/pagination';

export type PaginatedData<T> = {
  data: T[];
  pagination?: Pagination;
};
