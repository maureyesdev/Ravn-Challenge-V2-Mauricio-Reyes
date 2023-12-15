import { Injectable } from '@nestjs/common';
import { UserStatus } from '@prisma/client';
import { CreateUserCommand } from '@quickcart/users/application/commands/create-user/create-user-command';
import { User } from '@quickcart/users/domain/entities/user';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';

@Injectable()
export class CreateUserCommandHandler {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: CreateUserCommand) {
    const user = User.create({
      data: {
        ...command.data,
        status: command.data.status ?? UserStatus.PendingVerification,
      },
    });
    const newUser = await this.userRepository.createOne({ data: user });
    return newUser;
  }
}
