import { Field, InputType } from '@nestjs/graphql';
import { CategoryCreateData } from '@quickcart/products/domain/entities/category';

@InputType({ isAbstract: true })
export abstract class CreateCategoryDataInput implements CategoryCreateData {
  @Field()
  name: string;
}
