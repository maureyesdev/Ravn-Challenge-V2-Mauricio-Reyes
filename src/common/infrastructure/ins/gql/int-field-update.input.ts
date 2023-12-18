import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export abstract class IntFieldUpdateInput {
  @Field(() => Int, { nullable: true })
  set?: number;
}
