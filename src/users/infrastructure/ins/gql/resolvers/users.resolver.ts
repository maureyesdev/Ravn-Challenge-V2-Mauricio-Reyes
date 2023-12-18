import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '@quickcart/auth/infrastructure/ins/decorators/current-user.decorator';
import { UserRoles } from '@quickcart/auth/infrastructure/ins/decorators/user-roles.decorator';
import { JwtAuthGuard } from '@quickcart/auth/infrastructure/outs/guards/jwt-auth.guard';
import { UserRolesGuard } from '@quickcart/auth/infrastructure/outs/guards/user-roles.guard';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CheckoutCommandHandler } from '@quickcart/users/application/commands/checkout/checkout-command-handler';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { LikeProductCommandHandler } from '@quickcart/users/application/commands/like-product/like-product-command-handler';
import { GetMyOrdersQueryHandler } from '@quickcart/users/application/queries/get-my-orders/get-my-orders-query-handler';
import { GetUsersOrdersQueryHandler } from '@quickcart/users/application/queries/get-users-orders/get-users-orders-query-handler';
import { User, UserRole } from '@quickcart/users/domain/entities/user';
import { AddProductToCartArgs } from '@quickcart/users/infrastructure/ins/gql/args/add-product-to-cart.args';
import { CheckoutArgs } from '@quickcart/users/infrastructure/ins/gql/args/checkout-args';
import { CreateUserArgs } from '@quickcart/users/infrastructure/ins/gql/args/create-user.args';
import { GetUsersOrdersArgs } from '@quickcart/users/infrastructure/ins/gql/args/get-users-orders.args';
import { LikeProductArgs } from '@quickcart/users/infrastructure/ins/gql/args/like-product.args';
import { PaginatedUsersCartModel } from '@quickcart/users/infrastructure/ins/gql/models/paginated-users-cart-model';
import { UserCartModel } from '@quickcart/users/infrastructure/ins/gql/models/user-cart.model';
import { UserModel } from '@quickcart/users/infrastructure/ins/gql/models/user.model';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private readonly createUserCommandHandler: CreateUserCommandHandler,
    private readonly addProductToCartCommandHandler: AddProductToCartCommandHandler,
    private readonly likeProductCommandHandler: LikeProductCommandHandler,
    private readonly checkoutCommandHandler: CheckoutCommandHandler,
    private readonly getUsersOrdersQueryHandler: GetUsersOrdersQueryHandler,
    private readonly getMyOrdersQueryHandler: GetMyOrdersQueryHandler,
  ) {}

  @UseGuards(JwtAuthGuard, UserRolesGuard)
  @UserRoles(UserRole.Manager)
  @Mutation(() => UserModel)
  createUser(@Args() args: CreateUserArgs) {
    return this.createUserCommandHandler.execute(args);
  }

  @UseGuards(JwtAuthGuard)
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

  @Mutation(() => Boolean)
  likeProduct(@Args() args: LikeProductArgs) {
    return this.likeProductCommandHandler.execute(args);
  }

  @Mutation(() => Boolean)
  checkout(
    @Args() args: CheckoutArgs,
    @CurrentUser() user: Omit<User, 'password'>,
  ) {
    return this.checkoutCommandHandler.execute({ ...args, user });
  }

  @Query(() => PaginatedUsersCartModel)
  getUsersOrders(@Args() args: GetUsersOrdersArgs) {
    return this.getUsersOrdersQueryHandler.execute(args);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => UserCartModel)
  getMyOrders(@CurrentUser() user: Omit<User, 'password'>) {
    return this.getMyOrdersQueryHandler.execute({ userId: user.id });
  }
}
