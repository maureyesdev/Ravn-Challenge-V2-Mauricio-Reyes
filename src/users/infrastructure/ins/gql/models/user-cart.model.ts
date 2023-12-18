import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UserRole } from '@prisma/client';
import { User, UserStatus } from '@quickcart/users/domain/entities/user';
import { CartModel } from '@quickcart/users/infrastructure/ins/gql/models/cart.model';

@ObjectType({ isAbstract: true })
export abstract class UserCartModel implements Omit<User, 'password'> {
  @Field(() => Int)
  id: number;

  @Field()
  email: string;

  @Field(() => String)
  role: keyof typeof UserRole;

  @Field(() => String)
  status: keyof typeof UserStatus;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field(() => CartModel)
  orders: CartModel;
}
