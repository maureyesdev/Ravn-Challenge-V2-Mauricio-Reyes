import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

describe('CreateUserCommandHandler', () => {
  let provider: CreateUserCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserCommandHandler,
        // TODO: mock UserRepository with useFactory
        { provide: UserRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<CreateUserCommandHandler>(CreateUserCommandHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
