import { Module } from '@nestjs/common';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';
import { BcryptPasswordEncryptorService } from '@quickcart/common/infrastructure/outs/password-encryptor/bcrypt/bcrypt-password-encryptor.service';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { PrismaProductRepository } from '@quickcart/products/infrastructure/outs/persistence/prisma/prisma-product.repository';
import { AddProductToCartCommandHandler } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command-handler';
import { CheckoutCommandHandler } from '@quickcart/users/application/commands/checkout/checkout-command-handler';
import { CreateUserCommandHandler } from '@quickcart/users/application/commands/create-user/create-user-command-handler';
import { LikeProductCommandHandler } from '@quickcart/users/application/commands/like-product/like-product-command-handler';
import { GetMyOrdersQueryHandler } from '@quickcart/users/application/queries/get-my-orders/get-my-orders-query-handler';
import { GetUsersOrdersQueryHandler } from '@quickcart/users/application/queries/get-users-orders/get-users-orders-query-handler';
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
    { provide: ProductRepository, useClass: PrismaProductRepository },
    AddProductToCartCommandHandler,
    LikeProductCommandHandler,
    CheckoutCommandHandler,
    GetUsersOrdersQueryHandler,
    GetMyOrdersQueryHandler,
    {
      provide: PasswordEncryptorService,
      useClass: BcryptPasswordEncryptorService,
    },
  ],
})
export class UsersModule {}
