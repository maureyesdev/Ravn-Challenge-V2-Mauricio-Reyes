import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from '@quickcart/users/infrastructure/ins/gql/models/user.model';

@ObjectType({ isAbstract: true })
export abstract class SignInModel {
  @Field(() => UserModel)
  user: UserModel;

  @Field()
  accessToken: string;
}
