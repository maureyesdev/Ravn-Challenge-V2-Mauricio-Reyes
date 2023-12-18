import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { PrismaCartRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-cart.repository';

describe('PrismaCartRepository', () => {
  let provider: PrismaCartRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaCartRepository,
        // todo: this needs to be mocked using useFactory
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    provider = module.get<PrismaCartRepository>(PrismaCartRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
