import { Injectable } from '@nestjs/common';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/entities/repositories/product-repository';
import { ProductCreateOneArgs } from '@quickcart/products/domain/entities/repositories/types/product-create-one-args';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(args: ProductCreateOneArgs): Promise<Product> {
    const { data } = args;
    const newProduct = await this.prismaService.product.create({
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
        stock: data.stock,
        isEnabled: data.isEnabled,
      },
    });
    return newProduct;
  }
}
