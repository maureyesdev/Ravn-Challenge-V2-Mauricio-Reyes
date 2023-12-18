import { Injectable } from '@nestjs/common';
import { LikeProductCommand } from '@quickcart/users/application/commands/like-product/like-product-command';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class LikeProductCommandHandler {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: LikeProductCommand) {
    const wasProductLiked = await this.userRepository.likeOneProduct({
      data: command.data,
    });

    return wasProductLiked;
  }
}
