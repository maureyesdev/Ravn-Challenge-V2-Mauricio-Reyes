import { Test, TestingModule } from '@nestjs/testing';
import { CreateCategoryCommandHandler } from '@quickcart/products/application/commands/create-category/create-category-command-handler';
import { CategoriesResolver } from '@quickcart/products/infrastructure/ins/gql/resolvers/categories.resolver';

describe('CategoriesResolver', () => {
  let resolver: CategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoriesResolver,
        // TODO: need to be mocked with use factory
        { provide: CreateCategoryCommandHandler, useValue: {} },
      ],
    }).compile();

    resolver = module.get<CategoriesResolver>(CategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
