import { ArgsType, Field } from '@nestjs/graphql';
import { CartCreateOneCartItemArgs } from '@quickcart/users/domain/repositories/types/cart-create-one-cart-item-args';
import { CreateCartItemInput } from '@quickcart/users/infrastructure/ins/gql/inputs/create-cart-item-data';

@ArgsType()
export abstract class AddProductToCartArgs
  implements CartCreateOneCartItemArgs
{
  @Field(() => CreateCartItemInput)
  data: CreateCartItemInput;
}
