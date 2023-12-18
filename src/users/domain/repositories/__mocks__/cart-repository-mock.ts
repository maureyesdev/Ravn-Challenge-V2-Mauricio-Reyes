import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

export type CartRepositoryMock = Partial<
  Record<keyof CartRepository, jest.Mock>
>;

export const cartRepositoryMock = (): CartRepositoryMock => ({
  createOne: jest.fn(),
  findMany: jest.fn(),
  findOne: jest.fn(),
  updateOneCart: jest.fn(),
  findActiveCartByUserId: jest.fn(),
  createOneCartItem: jest.fn(),
  checkout: jest.fn(),
});
