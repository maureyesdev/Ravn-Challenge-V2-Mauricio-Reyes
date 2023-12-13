import { Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '@quickcart/users/infrastructure/ins/gql/models/user.model';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor() {}

  // @Mutation(() => UserModel)
  // createUser() {
  //   return {};
  // }

  @Query(() => [UserModel], { name: 'users' })
  findAll() {
    return [];
  }

  // @Query(() => UserModel, { name: 'user' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOne(id);
  // }

  // @Mutation(() => UserModel)
  // updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
  //   return this.usersService.update(updateUserInput.id, updateUserInput);
  // }

  // @Mutation(() => UserModel)
  // removeUser(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.remove(id);
  // }
}
