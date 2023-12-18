import { Injectable } from '@nestjs/common';
import { GetUsersOrdersQuery } from '@quickcart/users/application/queries/get-users-orders/get-users-orders-query';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class GetUsersOrdersQueryHandler {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: GetUsersOrdersQuery) {
    const usersWithCart = await this.userRepository.findManyOrders({
      where: query.where,
      take: query.take,
      page: query.page,
    });
    return usersWithCart;
  }
}
