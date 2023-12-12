import { Test, TestingModule } from '@nestjs/testing';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';

describe('GetProductsQueryHandler', () => {
  let provider: GetProductsQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GetProductsQueryHandler],
    }).compile();

    provider = module.get<GetProductsQueryHandler>(GetProductsQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
