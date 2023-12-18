import { Test, TestingModule } from '@nestjs/testing';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { DeleteProductCommandHandler } from '@quickcart/infrastructure/commands/delete-product/delete-product-command-handler';
import { UpdateProductCommandHandler } from '@quickcart/infrastructure/commands/update-product/update-product-command-handler';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { GetProductQueryHandler } from '@quickcart/products/application/queries/get-product/get-product-query-handler';
import { GetProductsQueryHandler } from '@quickcart/products/application/queries/get-products/get-products-query-handler';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { ProductsResolver } from '@quickcart/products/infrastructure/ins/gql/resolvers/products.resolver';

describe('ProductsResolver', () => {
  let resolver: ProductsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsResolver,
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ImageUploaderService, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: CreateProductCommandHandler, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: GetProductsQueryHandler, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: GetProductQueryHandler, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: UpdateProductCommandHandler, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: DeleteProductCommandHandler, useValue: {} },
      ],
    }).compile();

    resolver = module.get<ProductsResolver>(ProductsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
