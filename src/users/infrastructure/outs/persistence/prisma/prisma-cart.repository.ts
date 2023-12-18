import { Injectable } from '@nestjs/common';
import { CartStatus } from '@prisma/client';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { Cart } from '@quickcart/users/domain/entities/cart';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';
import { CartCheckoutArgs } from '@quickcart/users/domain/repositories/types/cart-checkout-args';
import { CartCreateOneArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-args';
import { CartCreateOneCartItemArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-cart-item-args';
import { CartFindManyArgs } from '@quickcart/users/domain/repositories/types/cart-find-many-args';
import { CartFindOneArgs } from '@quickcart/users/domain/repositories/types/cart-find-one-args';
import { CartUpdateOneArgs } from '@quickcart/users/domain/repositories/types/cart-update-one-args';

@Injectable()
export class PrismaCartRepository implements CartRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(args: CartCreateOneArgs): Promise<Cart> {
    const cart = await this.prismaService.cart.create({
      data: {
        user: { connect: { id: args.data.userId } },
        status: CartStatus.Active,
        // When creating new carts with no items, the total is 0
        total: 0,
      },
      include: { cartItem: true },
    });
    return {
      ...cart,
      cartItem: cart.cartItem,
    };
  }

  findOne(_: CartFindOneArgs): Promise<Cart> {
    throw new Error('Method not implemented.');
  }

  async findMany(args: CartFindManyArgs): Promise<PaginatedData<Cart>> {
    const { where, take, page } = args;
    const { pagination, data } = await this.prismaService.paginate(
      this.prismaService.cart,
      { where, include: { user: true } },
      { page, perPage: take },
    );
    return { pagination, data: data as Cart[] };
  }

  async updateOneCart(args: CartUpdateOneArgs): Promise<Cart> {
    const updatedCart = await this.prismaService.cart.update({
      data: {
        status: args.data.status,
        total: args.data.total,
      },
      where: {
        id: args.where.id,
      },
      include: { cartItem: true },
    });
    return {
      ...updatedCart,
      cartItem: updatedCart.cartItem,
    };
  }

  async findActiveCartByUserId(userId: number): Promise<Cart> {
    const cart = await this.prismaService.cart.findFirst({
      where: { status: CartStatus.Active, userId: userId },
      include: { cartItem: true },
    });
    if (!cart) {
      return null;
    }
    return {
      ...cart,
      cartItem: cart.cartItem,
    };
  }

  async createOneCartItem(args: CartCreateOneCartItemArgs): Promise<unknown> {
    // add product to cart
    await this.prismaService.cartItem.create({
      data: {
        cart: { connect: { id: args.data.cartId } },
        product: { connect: { id: args.data.productId } },
        quantity: args.data.quantity,
      },
    });

    return true;
  }

  async checkout(args: CartCheckoutArgs): Promise<boolean> {
    try {
      await this.prismaService.$transaction(async (tx) => {
        for (const cartItem of args.items) {
          // 1. Decrement product stock
          const product = await tx.product.update({
            data: { stock: { decrement: cartItem.quantity } },
            where: { id: cartItem.productId },
          });
          // 2. Check if product stock is not below zero
          if (product.stock < 0) {
            throw new Error('No enough stock');
          }
        }
      });
      return true;
    } catch (error) {
      throw new Error(`Error checking out cart: ${error.message}`);
    }
  }
}
