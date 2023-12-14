import { Test, TestingModule } from '@nestjs/testing';
import { BcryptPasswordEncryptorService } from '@quickcart/common/infrastructure/outs/password-encryptor/bcrypt/bcrypt-password-encryptor.service';

describe('BcryptPasswordEncryptorService', () => {
  let service: BcryptPasswordEncryptorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BcryptPasswordEncryptorService],
    }).compile();

    service = module.get<BcryptPasswordEncryptorService>(
      BcryptPasswordEncryptorService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
