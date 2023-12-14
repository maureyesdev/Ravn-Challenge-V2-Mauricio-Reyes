import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { SignInArgs } from '@quickcart/auth/infrastructure/ins/gql/args/sign-in.args';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const { data }: SignInArgs = ctx.getArgs();
    request.body = data;
    return request;
  }
}
