import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { USER_ROLES_KEY } from '@quickcart/auth/infrastructure/ins/decorators/user-roles.decorator';
import { User, UserRole } from '@quickcart/users/domain/entities/user';

@Injectable()
export class UserRolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const gqlContext = GqlExecutionContext.create(context);
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      USER_ROLES_KEY,
      [gqlContext.getHandler()],
    );
    if (!requiredRoles) {
      return true;
    }
    const user: Omit<User, 'password'> = gqlContext.getContext().req.user;

    return requiredRoles.some((role) => user.role.includes(role));
  }
}
