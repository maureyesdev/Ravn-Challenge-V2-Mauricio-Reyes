import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

export type UserRepositoryMock = Partial<
  Record<keyof UserRepository, jest.Mock>
>;

export const userRepositoryMock = (): UserRepositoryMock => ({
  createOne: jest.fn(),
  findOne: jest.fn(),
  findOneWithCarts: jest.fn(),
  likeOneProduct: jest.fn(),
  findManyOrders: jest.fn(),
});
