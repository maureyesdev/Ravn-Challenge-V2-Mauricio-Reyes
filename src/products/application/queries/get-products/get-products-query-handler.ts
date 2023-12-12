import { Injectable } from '@nestjs/common';
import { Product } from '@quickcart/products/domain/entities/product';

@Injectable()
export class GetProductsQueryHandler {
  private readonly products: Product[] = [
    {
      id: 1,
      name: 'Churritos',
      price: 1,
      image: 'imageurl here',
      stock: 10,
      isEnabled: false,
    },
  ];

  execute() {
    return Promise.resolve(this.products);
  }
}
