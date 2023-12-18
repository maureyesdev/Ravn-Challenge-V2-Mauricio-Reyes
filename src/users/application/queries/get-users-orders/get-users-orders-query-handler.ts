import { Injectable } from '@nestjs/common';
import { GetUsersOrdersQuery } from '@quickcart/users/application/queries/get-users-orders/get-users-orders-query';
import { CartRepository } from '@quickcart/users/domain/repositories/cart-repository';

@Injectable()
export class GetUsersOrdersQueryHandler {
  constructor(private readonly cartRepository: CartRepository) {}

  async execute(query: GetUsersOrdersQuery) {
    const carts = await this.cartRepository.findMany({
      where: query.where,
      take: query.take,
      page: query.page,
    });

    // Need to attached the users model to this
    return carts;
  }
}
