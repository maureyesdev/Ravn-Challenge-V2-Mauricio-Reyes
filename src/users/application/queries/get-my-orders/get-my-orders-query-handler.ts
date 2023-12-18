import { Injectable } from '@nestjs/common';
import { GetMyOrdersQuery } from '@quickcart/users/application/queries/get-my-orders/get-my-orders-query';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class GetMyOrdersQueryHandler {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetMyOrdersQuery) {
    const userWithCarts = await this.userRepository.findOneWithCarts({
      where: { id: query.userId },
    });
    if (!userWithCarts) {
      return null;
    }
    return userWithCarts;
  }
}
