import { Field, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export abstract class BooleanFieldUpdateInput {
  @Field(() => Boolean, { nullable: true })
  set?: boolean;
}
