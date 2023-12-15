import { Field, InputType } from '@nestjs/graphql';
import { UserStatus } from '@prisma/client';
import {
  UserCreateData,
  UserRole,
} from '@quickcart/users/domain/entities/user';

@InputType({ isAbstract: true })
export abstract class CreateUserDataInput implements UserCreateData {
  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => String, { nullable: true })
  role?: keyof typeof UserRole;

  @Field(() => String, { nullable: true })
  status?: keyof typeof UserStatus;
}
