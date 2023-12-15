import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SignInQuery } from '@quickcart/auth/application/queries/sign-in/sign-in-query';

@Injectable()
export class SignInQueryHandler {
  constructor(private readonly jwtService: JwtService) {}

  // * All of the validation is being handled by the local strategy and guard
  // * At this point we have a real user already
  async execute(query: SignInQuery) {
    const payload = { sub: query.user.id, email: query.user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    // set refresh token in httpOnly cookie // ? should we care about the refresh token?
    return {
      user: query.user,
      accessToken,
    };
  }
}
