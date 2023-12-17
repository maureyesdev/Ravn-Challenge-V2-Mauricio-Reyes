import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@quickcart/auth/infrastructure/ins/decorators/current-user.decorator';
import { UserRoles } from '@quickcart/auth/infrastructure/ins/decorators/user-roles.decorator';
import { JwtAuthGuard } from '@quickcart/auth/infrastructure/outs/guards/jwt-auth.guard';
import { UserRolesGuard } from '@quickcart/auth/infrastructure/outs/guards/user-roles.guard';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { User, UserRole } from '@quickcart/users/domain/entities/user';
import { AddProductToCartArgs } from '@quickcart/users/infrastructure/ins/gql/args/add-product-to-cart.args';
import { CreateUserArgs } from '@quickcart/users/infrastructure/ins/gql/args/create-user.args';
import { UserModel } from '@quickcart/users/infrastructure/ins/gql/models/user.model';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private readonly createUserCommandHandler: CreateUserCommandHandler,

    private readonly addProductToCartCommandHandler: AddProductToCartCommandHandler,
  ) {}

  @UseGuards(JwtAuthGuard, UserRolesGuard)
  @UserRoles(UserRole.Manager)
  @Mutation(() => UserModel)
  createUser(@Args() args: CreateUserArgs) {
    return this.createUserCommandHandler.execute(args);
  }

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

  @Mutation(() => Boolean)
  addProductToCart(
    @Args() args: AddProductToCartArgs,
    @CurrentUser() user: Omit<User, 'password'>,
  ) {
    return this.addProductToCartCommandHandler.execute({
      ...args,
      userId: user.id,
    });
  }
}
