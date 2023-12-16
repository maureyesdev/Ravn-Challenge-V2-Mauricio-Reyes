import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { PrismaCategoryRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-category.repository';

describe('PrismaCategoryRepository', () => {
  let provider: PrismaCategoryRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaCategoryRepository,
        // TODO: this needs to be mocked with use factory
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    provider = module.get<PrismaCategoryRepository>(PrismaCategoryRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
