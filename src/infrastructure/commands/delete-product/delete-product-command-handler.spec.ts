import { Test, TestingModule } from '@nestjs/testing';
import { DeleteProductCommandHandler } from '@quickcart/infrastructure/commands/delete-product/delete-product-command-handler';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

describe('DeleteProductCommandHandler', () => {
  let provider: DeleteProductCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteProductCommandHandler,
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<DeleteProductCommandHandler>(
      DeleteProductCommandHandler,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
