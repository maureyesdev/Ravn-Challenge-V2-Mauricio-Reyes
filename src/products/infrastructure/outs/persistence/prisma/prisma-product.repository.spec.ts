import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { PrismaProductRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-product.repository';

describe('PrismaProductRepository', () => {
  let provider: PrismaProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaProductRepository,
        PrismaService, // todo: this needs to be mocked
      ],
    }).compile();

    provider = module.get<PrismaProductRepository>(PrismaProductRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
