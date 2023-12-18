import { Field, InputType } from '@nestjs/graphql';
import { IntFilterInput } from '@quickcart/common/infrastructure/outs/gql/inputs/int-filter.input';
import { StringFilterInput } from '@quickcart/common/infrastructure/outs/gql/inputs/string-filter.input';
import { CategoryWhere } from '@quickcart/products/domain/repositories/types/category-where-input';

@InputType({ isAbstract: true })
export abstract class CategoryWhereInput implements CategoryWhere {
  @Field(() => IntFilterInput, { nullable: true })
  id?: IntFilterInput;

  @Field(() => StringFilterInput, { nullable: true })
  name?: StringFilterInput;
}
