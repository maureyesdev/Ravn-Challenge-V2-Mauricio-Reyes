import { Field, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export abstract class StringFieldUpdateInput {
  @Field(() => String, { nullable: true })
  set?: string;
}
