import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '@quickcart/products/domain/entities/category';

@ObjectType({ isAbstract: true })
export abstract class CategoryModel implements Category {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
