import { Test, TestingModule } from '@nestjs/testing';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { UsersResolver } from '@quickcart/users/infrastructure/ins/gql/resolvers/users.resolver';

describe('UsersResolver', () => {
  let resolver: UsersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        // TODO: mock CreateUserCommandHandler with useFactory
        { provide: CreateUserCommandHandler, useValue: {} },
        // TODO: mock CreateUserCommandHandler with useFactory
        { provide: AddProductToCartCommandHandler, useValue: {} },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
