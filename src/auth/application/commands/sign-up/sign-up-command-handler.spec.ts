import { Test, TestingModule } from '@nestjs/testing';
import { signUpCommandMock } from '@quickcart/auth/application/commands/sign-up/__mock__/sign-up-command-mock';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import {
  PasswordEncryptorServiceMock,
  passwordEncryptorServiceMock,
} from '@quickcart/common/domain/services/__mock__/password-encryptor-service-mock';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { userMock } from '@quickcart/users/domain/entities/__mocks__/user-mock';
import {
  UserRepositoryMock,
  userRepositoryMock,
} from '@quickcart/users/domain/repositories/__mocks__/user-repository-mock';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

describe('SignUpCommandHandler', () => {
  let command: SignUpCommandHandler;
  let userRepository: UserRepositoryMock;
  let passwordEncryptorService: PasswordEncryptorServiceMock;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SignUpCommandHandler,
        { provide: UserRepository, useFactory: userRepositoryMock },
        {
          provide: PasswordEncryptorService,
          useFactory: passwordEncryptorServiceMock,
        },
      ],
    }).compile();

    command = module.get<SignUpCommandHandler>(SignUpCommandHandler);
    userRepository = module.get<UserRepositoryMock>(UserRepository);
    passwordEncryptorService = module.get<PasswordEncryptorServiceMock>(
      PasswordEncryptorService,
    );
  });

  it('Dependencies should be defined', () => {
    expect(command).toBeDefined();
    expect(userRepository).toBeDefined();
    expect(passwordEncryptorService).toBeDefined();
  });

  describe('Given a valid data is being provided', () => {
    describe('When the user does not exist', () => {
      it('Then should create a new user', async () => {
        // Arrange
        userRepository.findOne.mockResolvedValue(null);
        userRepository.createOne.mockResolvedValue(userMock);
        // Act
        const commandResult = await command.execute(signUpCommandMock);
        // Assert
        expect(commandResult).toBe(userMock);
      });
    });

    describe('When the user exist', () => {
      it('Then should return a conflict error', async () => {
        // Arrange
        // Act
        // Assert
      });
    });
  });
});
