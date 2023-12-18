import { Field, InputType } from '@nestjs/graphql';
import { IntFilterInput } from '@quickcart/common/infrastructure/outs/gql/inputs/int-filter.input';
import { StringFilterInput } from '@quickcart/common/infrastructure/outs/gql/inputs/string-filter.input';
import { CartFindManyWhere } from '@quickcart/users/domain/repositories/types/cart-find-many-where';

@InputType({ isAbstract: true })
export abstract class GetUsersOrdersWhereInput implements CartFindManyWhere {
  @Field(() => IntFilterInput, { nullable: true })
  id?: IntFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  email?: StringFilterInput;
}
