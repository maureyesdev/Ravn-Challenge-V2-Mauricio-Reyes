import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { SignOutCommandHandler } from '@quickcart/auth/application/commands/sign-out/sign-out-command-handler';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
// import { SignInQueryHandler } from '@quickcart/auth/application/queries/sign-in/sign-in-query-handler';
import { CreateUserArgs } from '@quickcart/users/infrastructure/ins/gql/args/create-user.args';
import { UserModel } from '@quickcart/users/infrastructure/ins/gql/models/user.model';

@Resolver(() => 'Auth')
export class AuthResolver {
  constructor(
    private readonly signUpCommandHandler: SignUpCommandHandler,
    // private readonly signInQueryHandler: SignInQueryHandler,
    // private readonly signOutCommandHandler: SignOutCommandHandler,
  ) {}

  @Mutation(() => UserModel)
  signUp(@Args() args: CreateUserArgs) {
    return this.signUpCommandHandler.execute(args);
  }

  @Query(() => String)
  signIn() {
    return {};
  }

  @Mutation(() => String)
  signOut() {
    return {};
  }
}
