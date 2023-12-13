import { Module } from '@nestjs/common';
import { SignOutCommandHandler } from '@quickcart/auth/application/commands/sign-out/sign-out-command-handler';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import { SignInQueryHandler } from '@quickcart/auth/application/queries/sign-in/sign-in-query-handler';
import { AuthResolver } from '@quickcart/auth/infrastructure/ins/gql/resolvers/auth.resolver';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { BcryptPasswordEncryptorService } from '@quickcart/common/infrastructure/outs/password-encryptor/bcrypt/bcrypt-password-encryptor.service';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';
import { PrismaUserRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-user.repository';

@Module({
  providers: [
    PrismaService,
    AuthResolver,
    SignUpCommandHandler,
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
