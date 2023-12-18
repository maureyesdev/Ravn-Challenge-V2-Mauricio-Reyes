import { Field, ObjectType } from '@nestjs/graphql';
import { Pagination } from '@quickcart/common/domain/types/pagination';

@ObjectType({ isAbstract: true })
export abstract class PaginationModel implements Pagination {
  @Field()
  currentPage: number;

  @Field({ nullable: true })
  previousPage: number | null;

  @Field({ nullable: true })
  nextPage: number | null;

  @Field({ nullable: true })
  pageCount: number;

  @Field({ nullable: true })
  totalCount: number;
}
