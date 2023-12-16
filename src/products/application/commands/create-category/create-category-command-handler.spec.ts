import { Test, TestingModule } from '@nestjs/testing';
import { CreateCategoryCommandHandler } from '@quickcart/products/application/commands/create-category/create-category-command-handler';
import { CategoryRepository } from '@quickcart/products/domain/repositories/category-repository';

describe('CreateCategoryCommandHandler', () => {
  let provider: CreateCategoryCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateCategoryCommandHandler,
        // TODO: need to be mocked with useFactory
        { provide: CategoryRepository, useValue: {} },
      ],
    }).compile();

    provider = module.get<CreateCategoryCommandHandler>(
      CreateCategoryCommandHandler,
    );
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
