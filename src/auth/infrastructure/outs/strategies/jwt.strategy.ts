import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthConfig } from '@quickcart/auth/infrastructure/ins/config/auth.config';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly usersRepository: UserRepository,
  ) {
    const { jwt } = configService.get<AuthConfig>('auth');
    super({
      secretOrKey: jwt.accessToken.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: { sub: number; email: string }) {
    const user = await this.usersRepository.findOne({
      where: { id: payload.sub },
    });
    delete user.password;
    return user;
  }
}
