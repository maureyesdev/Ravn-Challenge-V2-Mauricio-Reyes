import { Test, TestingModule } from '@nestjs/testing';
import { ImageUploaderService } from '@quickcart/common/domain/services/image-uploader-service';
import { CreateProductCommandHandler } from '@quickcart/products/application/commands/create-product/create-product-command-handler';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

describe('CreateProductCommandHandler', () => {
  let command: CreateProductCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateProductCommandHandler,
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ProductRepository, useValue: {} },
        // TODO: Use Factory instead of value, need to be mocked
        { provide: ImageUploaderService, useValue: {} },
      ],
    }).compile();

    command = module.get<CreateProductCommandHandler>(
      CreateProductCommandHandler,
    );
  });

  it('should be defined', () => {
    expect(command).toBeDefined();
  });
});
