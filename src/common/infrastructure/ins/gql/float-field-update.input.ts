import { Field, Float, InputType } from '@nestjs/graphql';

@InputType({ isAbstract: true })
export abstract class FloatFieldUpdateInput {
  @Field(() => Float, { nullable: true })
  set?: number;
}
