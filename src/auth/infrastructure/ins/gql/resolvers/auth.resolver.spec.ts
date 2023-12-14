import { Test, TestingModule } from '@nestjs/testing';
import { SignOutCommandHandler } from '@quickcart/auth/application/commands/sign-out/sign-out-command-handler';
import { SignUpCommandHandler } from '@quickcart/auth/application/commands/sign-up/sign-up-command-handler';
import { SignInQueryHandler } from '@quickcart/auth/application/queries/sign-in/sign-in-query-handler';
import { AuthResolver } from '@quickcart/auth/infrastructure/ins/gql/resolvers/auth.resolver';

describe('AuthResolver', () => {
  let resolver: AuthResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        // TODO: mock dependencies with useFactory instead
        { provide: SignUpCommandHandler, useValue: {} },
        // TODO: mock dependencies with useFactory instead
        { provide: SignInQueryHandler, useValue: {} },
        // TODO: mock dependencies with useFactory instead
        { provide: SignOutCommandHandler, useValue: {} },
      ],
    }).compile();

    resolver = module.get<AuthResolver>(AuthResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
