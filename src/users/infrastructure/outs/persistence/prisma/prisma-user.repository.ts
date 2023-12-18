import { Injectable, Logger } from '@nestjs/common';
import { PaginatedData } from '@quickcart/common/domain/types/paginated-data';
import { PrismaService } from '@quickcart/common/infrastructure/outs/persistence/prisma/common/prisma.service';
import { User } from '@quickcart/users/domain/entities/user';
import { UserLikeOneProductArgs } from '@quickcart/users/domain/repositories/types/user-like-one-product-args';
import { UserRepository } from '@quickcart/users/domain/repositories/user-repository';
import { UserCreateOneArgs } from '@quickcart/users/domain/types/user-create-one-args';
import { UserFindOneArgs } from '@quickcart/users/domain/types/user-find-one-args';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  private readonly logger = new Logger(PrismaUserRepository.name);

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

  async likeOneProduct(args: UserLikeOneProductArgs): Promise<boolean> {
    const { data } = args;
    try {
      await this.prismaService.product.update({
        where: { id: data.productId },
        data: {
          likes: { connect: { id: data.userId } },
        },
      });
      return true;
    } catch (error) {
      this.logger.error('Error liking product', error, 'PrismaUserRepository');
      return false;
    }
  }

  async findManyOrders(args: any): Promise<PaginatedData<User>> {
    const { where, take, page } = args;
    const { pagination, data } = await this.prismaService.paginate(
      this.prismaService.user,
      { where, include: { cart: { include: { cartItem: true } } } },
      { page, perPage: take },
    );
    return { pagination, data: data as User[] };
  }

  async findOneWithCarts(args: UserFindOneArgs): Promise<User> {
    const user = this.prismaService.user.findUnique({
      where: { id: args.where.id },
      include: { cart: { include: { cartItem: true } } },
    });
    if (!user) {
      return null;
    }
    return user;
  }
}
