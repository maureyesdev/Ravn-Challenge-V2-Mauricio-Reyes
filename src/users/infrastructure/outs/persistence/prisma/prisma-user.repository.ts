import { Injectable } from '@nestjs/common';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { User } from '@quickcart/users/domain/entities/user';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';
import { UserCreateOneArgs } from '@quickcart/users/domain/types/user-create-one-args';
import { UserFindOneArgs } from '@quickcart/users/domain/types/user-find-one-args';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createOne(args: UserCreateOneArgs): Promise<User> {
    const { data } = args;
    const newUser = await this.prismaService.user.create({
      data: {
        email: data.email,
        password: data.password,
        role: data.role,
        status: data.status,
      },
    });
    return newUser;
  }

  async findOne(args: UserFindOneArgs): Promise<User | null> {
    const { where } = args;
    const user = await this.prismaService.user.findUnique({
      where: { id: where.id, email: where.email },
    });
    return user;
  }
}
