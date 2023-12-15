import { Module } from '@nestjs/common';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';
import { UsersResolver } from '@quickcart/users/infrastructure/ins/gql/resolvers/users.resolver';
import { PrismaUserRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-user.repository';

@Module({
  providers: [
    PrismaService,
    UsersResolver,
    CreateUserCommandHandler,
    { provide: UserRepository, useClass: PrismaUserRepository },
  ],
})
export class UsersModule {}
