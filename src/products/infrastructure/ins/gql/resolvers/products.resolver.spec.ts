import { Test, TestingModule } from '@nestjs/testing';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { ProductsResolver } from '@quickcart/products/infrastructure/ins/gql/resolvers/products.resolver';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        GetProductsQueryHandler, // TODO: should be mocked
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
