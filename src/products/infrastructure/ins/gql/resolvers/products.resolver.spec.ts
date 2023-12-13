import { Test, TestingModule } from '@nestjs/testing';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';
import { ProductsResolver } from '@quickcart/products/infrastructure/ins/gql/resolvers/products.resolver';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        CreateProductCommandHandler, // TODO: should be mocked
        GetProductsQueryHandler, // TODO: should be mocked
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ImageUploaderService, useValue: {} },
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
