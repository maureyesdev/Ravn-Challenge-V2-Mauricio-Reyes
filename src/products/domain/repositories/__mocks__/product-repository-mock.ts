import { ProductRepository } from '@quickcart/products/domain/repositories/product-repository';

export type ProductRepositoryMock = Partial<
  Record<keyof ProductRepository, jest.Mock>
>;

export const productRepository = (): ProductRepository => ({
  createOne: jest.fn(),
  findMany: jest.fn(),
  findOne: jest.fn(),
  updateOne: jest.fn(),
  deleteOne: jest.fn(),
});
