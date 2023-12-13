import { Test, TestingModule } from '@nestjs/testing';
import { SignInQueryHandler } from '@quickcart/auth/application/queries/sign-in/sign-in-query-handler';

describe('SignInQueryHandler', () => {
  let provider: SignInQueryHandler;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SignInQueryHandler],
    }).compile();

    provider = module.get<SignInQueryHandler>(SignInQueryHandler);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
