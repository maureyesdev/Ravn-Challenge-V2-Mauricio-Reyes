import { Test, TestingModule } from '@nestjs/testing';
import { GetUsersOrdersQueryHandler } from '@quickcart/users/application/queries/get-users-orders/get-users-orders-query-handler';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

describe('GetUsersOrdersQueryHandler', () => {
  let provider: GetUsersOrdersQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetUsersOrdersQueryHandler,
        // TODO: mock with useFactory
        { provide: CartRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<GetUsersOrdersQueryHandler>(
      GetUsersOrdersQueryHandler,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
