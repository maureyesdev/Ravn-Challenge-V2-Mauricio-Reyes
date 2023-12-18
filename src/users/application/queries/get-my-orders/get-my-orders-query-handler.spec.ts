import { Test, TestingModule } from '@nestjs/testing';
import { GetMyOrdersQueryHandler } from '@quickcart/users/application/queries/get-my-orders/get-my-orders-query-handler';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

describe('GetMyOrdersQueryHandler', () => {
  let provider: GetMyOrdersQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetMyOrdersQueryHandler,
        // TODO: need to be mocked with useFactory
        { provide: UserRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<GetMyOrdersQueryHandler>(GetMyOrdersQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
