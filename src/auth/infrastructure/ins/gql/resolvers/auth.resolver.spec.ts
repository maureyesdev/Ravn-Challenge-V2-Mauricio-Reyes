import { Test, TestingModule } from '@nestjs/testing';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import { AuthResolver } from '@quickcart/auth/infrastructure/ins/gql/resolvers/auth.resolver';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        // TODO: mock dependencies with useFactory instead
        { provide: SignUpCommandHandler, useValue: {} },
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
