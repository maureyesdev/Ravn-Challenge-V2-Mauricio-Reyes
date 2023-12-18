import { Test, TestingModule } from '@nestjs/testing';
import { UpdateProductCommandHandler } from '@quickcart/infrastructure/commands/update-product/update-product-command-handler';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

describe('UpdateProductCommandHandler', () => {
  let provider: UpdateProductCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateProductCommandHandler,
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<UpdateProductCommandHandler>(
      UpdateProductCommandHandler,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
