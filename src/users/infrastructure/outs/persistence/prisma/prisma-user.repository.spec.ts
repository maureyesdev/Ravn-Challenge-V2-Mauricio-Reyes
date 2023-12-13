import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { PrismaUserRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-user.repository';

describe('PrismaUserRepository', () => {
  let provider: PrismaUserRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PrismaUserRepository,
        // TODO: mock dependencies with useFactory instead
        { provide: PrismaService, useValue: {} },
      ],
    }).compile();

    provider = module.get<PrismaUserRepository>(PrismaUserRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
