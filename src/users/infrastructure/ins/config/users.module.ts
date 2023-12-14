import { Module } from '@nestjs/common';
import { UsersResolver } from '@quickcart/users/infrastructure/ins/gql/resolvers/users.resolver';

@Module({
  providers: [UsersResolver],
})
export class UsersModule {}
