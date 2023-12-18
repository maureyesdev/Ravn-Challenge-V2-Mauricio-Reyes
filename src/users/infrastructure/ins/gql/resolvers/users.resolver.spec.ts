import { Test, TestingModule } from '@nestjs/testing';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CheckoutCommandHandler } from '@quickcart/users/application/commands/checkout/checkout-command-handler';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { LikeProductCommandHandler } from '@quickcart/users/application/commands/like-product/like-product-command-handler';
import { GetUsersOrdersQueryHandler } from '@quickcart/users/application/queries/get-users-orders/get-users-orders-query-handler';
import { UsersResolver } from '@quickcart/users/infrastructure/ins/gql/resolvers/users.resolver';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        // TODO: mock  with useFactory
        { provide: CreateUserCommandHandler, useValue: {} },
        // TODO: mock  with useFactory
        { provide: AddProductToCartCommandHandler, useValue: {} },
        // TODO: mock  with useFactory
        { provide: LikeProductCommandHandler, useValue: {} },
        // TODO: mock  with useFactory
        { provide: CheckoutCommandHandler, useValue: {} },
        // TODO: mock with useFactory
        { provide: GetUsersOrdersQueryHandler, useValue: {} },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
