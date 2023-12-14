import { Test, TestingModule } from '@nestjs/testing';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

describe('SignUpCommandHandler', () => {
  let provider: SignUpCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignUpCommandHandler,
        // TODO: mock dependencies with useFactory instead
        { provide: UserRepository, useValue: {} },
        // TODO: mock dependencies with useFactory instead
        { provide: PasswordEncryptorService, useValue: {} },
      ],
    }).compile();

    provider = module.get<SignUpCommandHandler>(SignUpCommandHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
