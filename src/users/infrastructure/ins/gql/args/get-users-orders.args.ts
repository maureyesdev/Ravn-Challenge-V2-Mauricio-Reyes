import { ArgsType, Field, Int } from '@nestjs/graphql';
import { CartFindManyArgs } from '@quickcart/users/domain/repositories/types/cart-find-many-args';
import { GetUsersOrdersWhereInput } from '@quickcart/users/infrastructure/ins/gql/inputs/get-users-order-where.input';

@ArgsType()
export abstract class GetUsersOrdersArgs implements CartFindManyArgs {
  @Field(() => GetUsersOrdersWhereInput, { nullable: true })
  where?: GetUsersOrdersWhereInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  page?: number;
}
