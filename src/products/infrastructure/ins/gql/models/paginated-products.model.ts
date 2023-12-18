import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { PaginationModel } from '@quickcart/common/infrastructure/outs/gql/models/pagination.model';
import { ProductModel } from '@quickcart/products/infrastructure/ins/gql/models/product.model';

@ObjectType({ isAbstract: true })
export abstract class PaginatedProductsModel
  implements PaginatedData<ProductModel>
{
  @Field(() => PaginationModel, { nullable: true })
  pagination?: PaginationModel;

  @Field(() => [ProductModel])
  data: ProductModel[];
}
