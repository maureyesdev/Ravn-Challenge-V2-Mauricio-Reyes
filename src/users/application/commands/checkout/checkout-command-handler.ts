import { Injectable } from '@nestjs/common';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { CheckoutCommand } from '@quickcart/users/application/commands/checkout/checkout-command';
import { CartStatus } from '@quickcart/users/domain/entities/cart';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

@Injectable()
export class CheckoutCommandHandler {
  constructor(
    private readonly cartRepository: CartRepository,
    private readonly productRepository: ProductRepository,
  ) {}

  async execute(command: CheckoutCommand) {
    const activeCart = await this.cartRepository.findActiveCartByUserId(
      command.user.id,
    );
    const checkout = await this.cartRepository.checkout({
      items: command.items,
    });
    if (!checkout) {
      throw new Error('Error checking out');
    }
    // get products by products ids
    const { data: products } = await this.productRepository.findMany({
      where: {
        id: { in: command.items.map((item) => item.productId) },
      },
    });
    // TODO: this checkout total should be moved towards addProductToCartCommandHandler
    const checkoutTotal = products.reduce((total, product) => {
      const item = command.items.find((item) => item.productId === product.id);
      if (!item) {
        throw new Error('Item not found');
      }
      return total + product.price * item.quantity;
    }, 0);
    // update cart to checked out status
    const updatedCart = await this.cartRepository.updateOneCart({
      data: {
        total: { set: checkoutTotal },
        status: { set: CartStatus.CheckedOut },
      },
      where: {
        id: activeCart.id,
      },
    });
    return !!updatedCart;
  }
}
