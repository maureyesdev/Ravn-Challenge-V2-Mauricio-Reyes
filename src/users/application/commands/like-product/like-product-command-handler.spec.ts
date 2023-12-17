import { Test, TestingModule } from '@nestjs/testing';
import { LikeProductCommandHandler } from '@quickcart/users/application/commands/like-product/like-product-command-handler';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

describe('LikeProductCommandHandler', () => {
  let command: LikeProductCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LikeProductCommandHandler,
        // TODO: mock CreateUserCommandHandler with useFactory
        { provide: UserRepository, useValue: {} },
      ],
    }).compile();

    command = module.get<LikeProductCommandHandler>(LikeProductCommandHandler);
  });

  it('should be defined', () => {
    expect(command).toBeDefined();
  });
});
