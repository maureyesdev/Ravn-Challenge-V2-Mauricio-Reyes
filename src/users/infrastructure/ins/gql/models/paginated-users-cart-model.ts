import { Field, ObjectType } from '@nestjs/graphql';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { PaginationModel } from '@quickcart/common/infrastructure/outs/gql/models/pagination.model';
import { UserCartModel } from '@quickcart/users/infrastructure/ins/gql/models/user-cart.model';

@ObjectType({ isAbstract: true })
export abstract class PaginatedUsersCartModel
  implements PaginatedData<UserCartModel>
{
  @Field(() => PaginationModel, { nullable: true })
  pagination?: PaginationModel;

  @Field(() => [UserCartModel])
  data: UserCartModel[];
}
