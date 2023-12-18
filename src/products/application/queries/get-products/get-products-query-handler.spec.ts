import { Test, TestingModule } from '@nestjs/testing';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

describe('GetProductsQueryHandler', () => {
  let provider: GetProductsQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetProductsQueryHandler,
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<GetProductsQueryHandler>(GetProductsQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
