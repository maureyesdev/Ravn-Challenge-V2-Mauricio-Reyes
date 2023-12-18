import { Test, TestingModule } from '@nestjs/testing';
import { GetProductQueryHandler } from '@quickcart/products/application/queries/get-product/get-product-query-handler';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

describe('GetProductQueryHandler', () => {
  let provider: GetProductQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetProductQueryHandler,
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<GetProductQueryHandler>(GetProductQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
