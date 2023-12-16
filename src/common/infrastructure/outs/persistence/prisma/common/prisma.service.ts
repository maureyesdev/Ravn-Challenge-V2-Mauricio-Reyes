import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { Pagination } from '@quickcart/common/domain/types/pagination';

type PaginateOptions = {
  page?: number | string;
  perPage?: number | string;
};

type PaginateFunction = <T, K>(
  model: any,
  args?: K,
  options?: PaginateOptions,
) => Promise<PaginatedData<T>>;

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.$connect();
  }

  paginate: PaginateFunction = this.paginator({ page: 1, perPage: 10 });

  private paginator(defaultOptions: PaginateOptions): PaginateFunction {
    return async (model, args: any = { where: undefined }, options) => {
      const page = Number(options?.page || defaultOptions?.page) || 1;
      const perPage = Number(options?.perPage || defaultOptions?.perPage) || 10;

      const skip = page > 0 ? perPage * (page - 1) : 0;
      const [total, data] = await Promise.all([
        model.count({ where: args.where }),
        model.findMany({
          ...args,
          take: perPage,
          skip,
        }),
      ]);
      const lastPage = Math.ceil(total / perPage);

      return {
        data,
        pagination: {
          currentPage: page,
          previousPage: page > 1 ? page - 1 : null,
          nextPage: page < lastPage ? page + 1 : null,
          pageCount: perPage,
          totalCount: total,
        } as Pagination,
      };
    };
  }
}
