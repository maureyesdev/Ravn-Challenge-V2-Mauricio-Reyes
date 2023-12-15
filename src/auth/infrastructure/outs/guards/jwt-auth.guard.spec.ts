import { JwtAuthGuard } from '@quickcart/auth/infrastructure/outs/guards/jwt-auth.guard';

describe('JwtAuthGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuard()).toBeDefined();
  });
});
