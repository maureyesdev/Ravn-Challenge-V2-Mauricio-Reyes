import { Injectable } from '@nestjs/common';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { Category } from '@quickcart/products/domain/entities/category';
import { CategoryRepository } from '@quickcart/products/domain/repositories/category-repository';
import { CategoryCreateOneArgs } from '@quickcart/products/domain/repositories/types/category-create-one-args';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(args: CategoryCreateOneArgs): Promise<Category> {
    const { data } = args;
    const newCategory = await this.prismaService.category.create({
      data: { name: data.name },
    });
    return newCategory;
  }
}
