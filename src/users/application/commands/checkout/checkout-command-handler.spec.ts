import { Test, TestingModule } from '@nestjs/testing';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { CheckoutCommandHandler } from '@quickcart/users/application/commands/checkout/checkout-command-handler';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

describe('CheckoutCommandHandler', () => {
  let command: CheckoutCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CheckoutCommandHandler,
        // todo: this needs to be mocked using useFactory
        { provide: ProductRepository, useValue: {} },
        // todo: this needs to be mocked using useFactory
        { provide: CartRepository, useValue: {} },
      ],
    }).compile();

    command = module.get<CheckoutCommandHandler>(CheckoutCommandHandler);
  });

  it('should be defined', () => {
    expect(command).toBeDefined();
  });
});
