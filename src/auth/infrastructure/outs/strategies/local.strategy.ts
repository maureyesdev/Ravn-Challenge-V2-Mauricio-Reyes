import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { ValidateUserQueryHandler } from '@quickcart/auth/application/queries/validate-user/validate-user-query-handler';
import { CustomError } from '@quickcart/common/domain/errors/custom-error';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly validateUserQueryHandler: ValidateUserQueryHandler,
  ) {
    super({ usernameField: 'email', passwordField: 'password' });
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.validateUserQueryHandler.execute({
      email,
      password,
    });
    if (!user) {
      throw CustomError.BadRequest('Invalid Credentials');
    }
    return user;
  }
}
