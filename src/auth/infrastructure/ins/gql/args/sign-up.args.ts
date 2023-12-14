import { ArgsType, Field } from '@nestjs/graphql';
import { UserCreateOneArgs } from '@quickcart/users/domain/types/user-create-one-args';
import { CreateUserDataInput } from '@quickcart/users/infrastructure/ins/gql/inputs/create-user-data.input';

@ArgsType()
export abstract class SignUpArgs implements UserCreateOneArgs {
  @Field(() => CreateUserDataInput)
  data: CreateUserDataInput;
}
