import { Injectable } from '@nestjs/common';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';
import { ProductCreateOneArgs } from '@quickcart/products/domain/entities/repositories/types/product-create-one-args';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
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

  async createOne(args: ProductCreateOneArgs): Promise<Product> {
    const newProduct: Product = {
      ...args.data,
      isEnabled: args.data.isEnabled,
      id: this.products.length + 1,
    };
    this.products.push(newProduct);
    return Promise.resolve(newProduct);
  }
}
