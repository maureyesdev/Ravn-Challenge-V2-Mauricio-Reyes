import { CategoryRepository } from '@quickcart/products/domain/repositories/category-repository';

export type CategoryRepositoryMock = Partial<
  Record<keyof CategoryRepository, jest.Mock>
>;

export const categoryRepository = (): CategoryRepository => ({
  createOne: jest.fn(),
});
