import { Injectable } from '@nestjs/common';
import { CartStatus } from '@prisma/client';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { Cart } from '@quickcart/users/domain/entities/cart';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';
import { CartCreateOneArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-args';
import { CartCreateOneCartItemArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-cart-item-args';
import { CartFindOneArgs } from '@quickcart/users/domain/repositories/types/cart-find-one-args';

@Injectable()
export class PrismaCartRepository implements CartRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(args: CartCreateOneArgs): Promise<Cart> {
    const cart = await this.prismaService.cart.create({
      data: {
        user: { connect: { id: args.data.userId } },
        status: CartStatus.Active,
      },
    });
    return cart;
  }

  findOne(_: CartFindOneArgs): Promise<Cart> {
    throw new Error('Method not implemented.');
  }

  async findActiveCartByUserId(userId: number): Promise<Cart> {
    const cart = await this.prismaService.cart.findFirst({
      where: { status: CartStatus.Active, userId: userId },
    });
    return cart;
  }

  createOneCartItem(_: CartCreateOneCartItemArgs): Promise<unknown> {
    throw new Error('Method not implemented.');
  }
}
