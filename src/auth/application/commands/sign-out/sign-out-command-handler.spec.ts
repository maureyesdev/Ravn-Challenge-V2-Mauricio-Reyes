import { Test, TestingModule } from '@nestjs/testing';
import { SignOutCommandHandler } from '@quickcart/auth/application/commands/sign-out/sign-out-command-handler';

describe('SignOutCommandHandler', () => {
  let provider: SignOutCommandHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignOutCommandHandler],
    }).compile();

    provider = module.get<SignOutCommandHandler>(SignOutCommandHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
