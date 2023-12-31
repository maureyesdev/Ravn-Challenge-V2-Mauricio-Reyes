import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { User } from '@quickcart/users/domain/entities/user';
import { UserLikeOneProductArgs } from '@quickcart/users/domain/repositories/types/user-like-one-product-args';
import { UserCreateOneArgs } from '@quickcart/users/domain/types/user-create-one-args';
import { UserFindOneArgs } from '@quickcart/users/domain/types/user-find-one-args';

export abstract class UserRepository {
  abstract createOne(args: UserCreateOneArgs): Promise<User>;
  abstract findOne(args: UserFindOneArgs): Promise<User | null>;
  abstract findOneWithCarts(args: UserFindOneArgs): Promise<User | null>;
  abstract likeOneProduct(args: UserLikeOneProductArgs): Promise<boolean>;
  abstract findManyOrders(args: any): Promise<PaginatedData<User>>;
}
