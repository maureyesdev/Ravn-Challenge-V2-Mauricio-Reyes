import { LocalAuthGuard } from '@quickcart/auth/infrastructure/outs/guards/local-auth.guard';

describe('LocalAuthGuard', () => {
  it('should be defined', () => {
    expect(new LocalAuthGuard()).toBeDefined();
  });
});
