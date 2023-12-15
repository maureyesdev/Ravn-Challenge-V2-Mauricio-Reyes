import { Reflector } from '@nestjs/core';
import { UserRolesGuard } from '@quickcart/auth/infrastructure/outs/guards/user-roles.guard';

describe('UserRolesGuard', () => {
  it('should be defined', () => {
    const reflector = new Reflector();
    expect(new UserRolesGuard(reflector)).toBeDefined();
  });
});
