import { SetMetadata } from '@nestjs/common';
import { UserRole } from '@quickcart/users/domain/entities/user';

export const USER_ROLES_KEY = 'user-roles';
export const UserRoles = (...roles: UserRole[]) =>
  SetMetadata(USER_ROLES_KEY, roles);
