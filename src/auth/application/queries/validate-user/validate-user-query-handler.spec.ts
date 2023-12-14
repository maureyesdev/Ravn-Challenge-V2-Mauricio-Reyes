import { Test, TestingModule } from '@nestjs/testing';
import { ValidateUserQueryHandler } from '@quickcart/auth/application/queries/validate-user/validate-user-query-handler';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

describe('ValidateUserQueryHandler', () => {
  let query: ValidateUserQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ValidateUserQueryHandler,
        // TODO: mock dependencies with useFactory instead
        { provide: UserRepository, useValue: {} },
        // TODO: mock dependencies with useFactory instead
        { provide: PasswordEncryptorService, useValue: {} },
      ],
    }).compile();

    query = module.get<ValidateUserQueryHandler>(ValidateUserQueryHandler);
  });

  it('should be defined', () => {
    expect(query).toBeDefined();
  });
});
