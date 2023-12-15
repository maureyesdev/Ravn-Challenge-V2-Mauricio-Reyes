import { Test, TestingModule } from '@nestjs/testing';
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
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
