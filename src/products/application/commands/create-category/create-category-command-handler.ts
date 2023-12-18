import { Injectable } from '@nestjs/common';
import { CreateCategoryCommand } from '@quickcart/products/application/commands/create-category/create-category-command';
import { Category } from '@quickcart/products/domain/entities/category';
import { CategoryRepository } from '@quickcart/products/domain/repositories/category-repository';

@Injectable()
export class CreateCategoryCommandHandler {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(command: CreateCategoryCommand) {
    const category = Category.create({ data: command.data });
    const newCategory = await this.categoryRepository.createOne({
      data: category,
    });
    return newCategory;
  }
}
