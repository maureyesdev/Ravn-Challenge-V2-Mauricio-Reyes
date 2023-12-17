import { ArgsType, Field } from '@nestjs/graphql';
import { UserLikeOneProductArgs } from '@quickcart/users/domain/repositories/types/user-like-one-product-args';
import { LikeProductDataInput } from '@quickcart/users/infrastructure/ins/gql/inputs/like-product-data.input';

@ArgsType()
export abstract class LikeProductArgs implements UserLikeOneProductArgs {
  @Field(() => LikeProductDataInput)
  data: LikeProductDataInput;
}
