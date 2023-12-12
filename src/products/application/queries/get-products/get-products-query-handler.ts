import { Injectable } from '@nestjs/common';
import { Product } from '@quickcart/products/domain/entities/product';

@Injectable()
export class GetProductsQueryHandler {
  private readonly products: Product[] = [{ id: 1 }];

  execute() {
    return Promise.resolve(this.products);
  }
}
