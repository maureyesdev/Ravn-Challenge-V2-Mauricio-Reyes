import { Test, TestingModule } from '@nestjs/testing';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

describe('AddProductToCartCommandHandler', () => {
  let provider: AddProductToCartCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddProductToCartCommandHandler,
        { provide: CartRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<AddProductToCartCommandHandler>(
      AddProductToCartCommandHandler,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
