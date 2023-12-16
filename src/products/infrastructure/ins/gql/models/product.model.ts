import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Product } from '@quickcart/products/domain/entities/product';
import { CategoryModel } from '@quickcart/products/infrastructure/ins/gql/models/category.model';

@ObjectType({ isAbstract: true })
export abstract class ProductModel implements Product {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Float)
  price: number;

  @Field(() => String)
  image: string;

  @Field(() => Int)
  stock: number;

  @Field()
  isEnabled: boolean;

  @Field(() => [CategoryModel])
  categories: CategoryModel[];
}
