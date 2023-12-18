import { Field, InputType, Int } from '@nestjs/graphql';
import { UserLikeOneProductData } from '@quickcart/users/domain/repositories/types/user-like-one-product-data';

@InputType({ isAbstract: true })
export abstract class LikeProductDataInput implements UserLikeOneProductData {
  @Field(() => Int)
  userId: number;

  @Field(() => Int)
  productId: number;
}
