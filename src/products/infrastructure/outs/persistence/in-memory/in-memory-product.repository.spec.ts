import { Test, TestingModule } from '@nestjs/testing';
import { InMemoryProductRepository } from '@quickcart/products/infrastructure/outs/persistence/in-memory/in-memory-product.repository';

describe('InMemoryProductRepository', () => {
  let provider: InMemoryProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InMemoryProductRepository],
    }).compile();

    provider = module.get<InMemoryProductRepository>(InMemoryProductRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
