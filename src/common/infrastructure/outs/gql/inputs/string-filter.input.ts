import { Field, InputType } from '@nestjs/graphql';
import { QueryModeEnum } from '@quickcart/common/infrastructure/outs/gql/enums/string-query-mode.enum';
import { NestedStringFilterInput } from '@quickcart/common/infrastructure/outs/gql/inputs/nested-string-filter.input';

// import { QueryMode } from '@shopii/tenants/infrastructure/inputs/gql/enums/query-mode.enum';
// import { NestedStringFilter } from '@shopii/tenants/infrastructure/inputs/gql/inputs/common/nested-string-filter.input';

@InputType({ isAbstract: true })
export abstract class StringFilterInput {
  @Field(() => String, { nullable: true })
  equals?: string;

  @Field(() => [String], { nullable: true })
  in?: Array<string>;

  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;

  @Field(() => String, { nullable: true })
  lt?: string;

  @Field(() => String, { nullable: true })
  lte?: string;

  @Field(() => String, { nullable: true })
  gt?: string;

  @Field(() => String, { nullable: true })
  gte?: string;

  @Field(() => String, { nullable: true })
  contains?: string;

  @Field(() => String, { nullable: true })
  startsWith?: string;

  @Field(() => String, { nullable: true })
  endsWith?: string;

  @Field(() => QueryModeEnum, { nullable: true })
  mode?: QueryModeEnum;

  @Field(() => NestedStringFilterInput, { nullable: true })
  not?: NestedStringFilterInput;
}
