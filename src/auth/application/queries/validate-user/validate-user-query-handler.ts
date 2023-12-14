import { Injectable } from '@nestjs/common';
import { ValidateUserQuery } from '@quickcart/auth/application/queries/validate-user/validate-user-query';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { User } from '@quickcart/users/domain/entities/user';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class ValidateUserQueryHandler {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordEncryptorService: PasswordEncryptorService,
  ) {}

  async execute(query: ValidateUserQuery): Promise<Omit<User, 'password'>> {
    const user = await this.userRepository.findOne({
      where: { email: query.email },
    });
    if (!user) {
      return null;
    }
    const doesPasswordMatch = await this.passwordEncryptorService.compare(
      query.password,
      user.password,
    );
    if (!doesPasswordMatch) {
      return null;
    }
    delete user.password;
    return user;
  }
}
