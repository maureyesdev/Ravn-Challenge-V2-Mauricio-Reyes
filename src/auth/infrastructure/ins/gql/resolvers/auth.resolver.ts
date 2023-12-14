import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SignOutCommandHandler } from '@quickcart/auth/application/commands/sign-out/sign-out-command-handler';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import { SignInQueryHandler } from '@quickcart/auth/application/queries/sign-in/sign-in-query-handler';
import { User as CurrentUser } from '@quickcart/auth/infrastructure/ins/decorators/user.decorator';
import { SignInArgs } from '@quickcart/auth/infrastructure/ins/gql/args/sign-in.args';
import { SignUpArgs } from '@quickcart/auth/infrastructure/ins/gql/args/sign-up.args';
import { SignInModel } from '@quickcart/auth/infrastructure/ins/gql/models/sign-in.model';
import { LocalAuthGuard } from '@quickcart/auth/infrastructure/outs/guards/local-auth.guard';
import { User } from '@quickcart/users/domain/entities/user';
import { UserModel } from '@quickcart/users/infrastructure/ins/gql/models/user.model';

@Resolver(() => 'Auth')
export class AuthResolver {
  constructor(
    private readonly signUpCommandHandler: SignUpCommandHandler,
    private readonly signInQueryHandler: SignInQueryHandler,
    private readonly signOutCommandHandler: SignOutCommandHandler,
  ) {}

  @Mutation(() => UserModel)
  signUp(@Args() args: SignUpArgs) {
    return this.signUpCommandHandler.execute(args);
  }

  @UseGuards(LocalAuthGuard)
  @Query(() => SignInModel)
  signIn(@Args() _: SignInArgs, @CurrentUser() user: Omit<User, 'password'>) {
    return this.signInQueryHandler.execute({ user });
  }

  @Mutation(() => Boolean)
  signOut() {
    return this.signOutCommandHandler.execute();
  }
}
