import { Injectable } from '@nestjs/common';
import { UserRole, UserStatus } from '@prisma/client';
import { SignUpCommand } from '@quickcart/auth/application/commands/sign-up/sign-up-command';
import { CustomError } from '@quickcart/common/domain/errors/custom-error';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { User } from '@quickcart/users/domain/entities/user';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class SignUpCommandHandler {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordEncryptorService: PasswordEncryptorService,
  ) {}

  async execute(command: SignUpCommand) {
    const userExist = await this.userRepository.findOne({
      where: { email: command.data.email },
    });
    if (userExist) {
      return CustomError.Conflict('User already exist');
    }
    const user = User.create({
      data: { ...command.data, role: UserRole.User },
    });
    const newUser = await this.userRepository.createOne({
      data: {
        ...user,
        status: UserStatus.PendingVerification,
        password: await this.passwordEncryptorService.encrypt(user.password),
      },
    });
    // TODO: send email confirmation
    return newUser;
  }
}
