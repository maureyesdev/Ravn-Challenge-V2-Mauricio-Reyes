import { Module } from '@nestjs/common';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';
import { UsersResolver } from '@quickcart/users/infrastructure/ins/gql/resolvers/users.resolver';
import { PrismaCartRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-cart.repository';
import { PrismaUserRepository } from '@quickcart/users/infrastructure/outs/persistence/prisma/prisma-user.repository';

@Module({
  providers: [
    PrismaService,
    // users
    UsersResolver,
    CreateUserCommandHandler,
    { provide: UserRepository, useClass: PrismaUserRepository },
    // carts
    { provide: CartRepository, useClass: PrismaCartRepository },
    AddProductToCartCommandHandler,
  ],
})
export class UsersModule {}
