import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { SignOutCommandHandler } from '@quickcart/auth/application/commands/sign-out/sign-out-command-handler';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import { SignInQueryHandler } from '@quickcart/auth/application/queries/sign-in/sign-in-query-handler';
import { ValidateUserQueryHandler } from '@quickcart/auth/application/queries/validate-user/validate-user-query-handler';
import {
  AuthConfig,
  authConfig,
} from '@quickcart/auth/infrastructure/ins/config/auth.config';
import { AuthResolver } from '@quickcart/auth/infrastructure/ins/gql/resolvers/auth.resolver';
import { JwtStrategy } from '@quickcart/auth/infrastructure/outs/strategies/jwt.strategy';
import { LocalStrategy } from '@quickcart/auth/infrastructure/outs/strategies/local.strategy';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { BcryptPasswordEncryptorService } from '@quickcart/common/infrastructure/outs/password-encryptor/bcrypt/bcrypt-password-encryptor.service';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';
import { PrismaUserRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-user.repository';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [authConfig] }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const { jwt } = configService.get<AuthConfig>('auth');
        return {
          secret: jwt.accessToken.secret,
          signOptions: { expiresIn: jwt.accessToken.expiration },
        };
      },
    }),
    PassportModule,
  ],
  providers: [
    LocalStrategy,
    JwtStrategy,
    PrismaService,
    AuthResolver,
    SignUpCommandHandler,
    ValidateUserQueryHandler,
    SignInQueryHandler,
    SignOutCommandHandler,
    {
      provide: PasswordEncryptorService,
      useClass: BcryptPasswordEncryptorService,
    },
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class AuthModule {}
