import { User } from '@quickcart/users/domain/entities/user';
import { UserCreateOneArgs } from '@quickcart/users/domain/types/user-create-one-args';
import { UserFindOneArgs } from '@quickcart/users/domain/types/user-find-one-args';

export abstract class UserRepository {
  abstract createOne(args: UserCreateOneArgs): Promise<User>;
  abstract findOne(args: UserFindOneArgs): Promise<User | null>;
}
