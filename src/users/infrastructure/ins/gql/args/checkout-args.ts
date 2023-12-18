import { ArgsType, Field } from '@nestjs/graphql';
import { CartCheckoutArgs } from '@quickcart/users/domain/repositories/types/cart-checkout-args';
import { CheckoutCartItemInput } from '@quickcart/users/infrastructure/ins/gql/inputs/checkout-cart-item.input';

@ArgsType()
export abstract class CheckoutArgs implements CartCheckoutArgs {
  @Field(() => [CheckoutCartItemInput])
  items: CheckoutCartItemInput[];
}
