import { Injectable } from '@nestjs/common';
import { AddProductToCartCommand } from '@quickcart/users/application/commands/add-product-to-cart/add-product-to-cart-command';
import { Cart } from '@quickcart/users/domain/entities/cart';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

@Injectable()
export class AddProductToCartCommandHandler {
  constructor(private readonly cartRepository: CartRepository) {}

  async execute(command: AddProductToCartCommand) {
    try {
      const { data, userId } = command;
      let activeCart: Cart;
      activeCart = await this.cartRepository.findActiveCartByUserId(userId);
      if (!activeCart) {
        activeCart = await this.cartRepository.createOne({
          data: { userId },
        });
      }
      await this.cartRepository.createOneCartItem({
        data: {
          cartId: activeCart.id,
          productId: data.productId,
          quantity: data.quantity,
        },
      });

      return true;
    } catch (error) {
      throw new Error(`Error adding products to cart: ${error.message}`);
      return false;
    }
  }
}
