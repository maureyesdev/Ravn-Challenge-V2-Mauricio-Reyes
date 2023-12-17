import { Injectable } from '@nestjs/common';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { Product } from '@quickcart/products/domain/entities/product';
import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';
import { ProductCreateOneArgs } from '@quickcart/products/domain/repositories/types/product-create-one-args';
import { ProductFindManyArgs } from '@quickcart/products/domain/repositories/types/product-find-many-args';
import { ProductFindOneArgs } from '@quickcart/products/domain/repositories/types/product-find-one-args';
import { ProductUpdateOneArgs } from '@quickcart/products/domain/repositories/types/product-update-one-args';

@Injectable()
export class PrismaProductRepository implements ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(args: ProductCreateOneArgs): Promise<Product> {
    const { data } = args;
    const categories = data.categories as number[];
    const newProduct = await this.prismaService.product.create({
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
        stock: data.stock,
        isEnabled: data.isEnabled,
        categories: { connect: [...categories.map((id) => ({ id }))] },
      },
      include: { categories: true },
    });

    return {
      ...newProduct,
      categories: newProduct.categories.map(({ id, name }) => ({ id, name })),
    };
  }

  async findMany(args: ProductFindManyArgs): Promise<PaginatedData<Product>> {
    const { where } = args;
    const { pagination, data } = await this.prismaService.paginate(
      this.prismaService.product,
      { where, include: { categories: true } },
    );

    return { pagination, data: data as Product[] };
  }

  async findOne(args: ProductFindOneArgs): Promise<Product | null> {
    const { where } = args;
    const product = await this.prismaService.product.findUnique({
      where,
      include: { categories: true },
    });
    return product;
  }

  async updateOne(args: ProductUpdateOneArgs): Promise<Product> {
    const { where, data } = args;
    const updatedProduct = await this.prismaService.product.update({
      where,
      data: {
        name: data.name,
        price: data.price,
        image: data.image,
        stock: data.stock,
        isEnabled: data.isEnabled,
        categories: { connect: [...data.categories.map((id) => ({ id }))] },
      },
      include: { categories: true },
    });
    return updatedProduct;
  }

  async deleteOne(args: ProductFindOneArgs): Promise<Product> {
    const { where } = args;
    const deletedProduct = await this.prismaService.product.delete({
      where,
      include: { categories: true },
    });
    return deletedProduct;
  }
}
