import { Field, InputType } from '@nestjs/graphql';
import { UserCreateData } from '@quickcart/users/domain/entities/user';

@InputType({ isAbstract: true })
export abstract class CreateUserDataInput implements UserCreateData {
  @Field()
  email: string;

  @Field()
  password: string;
}
