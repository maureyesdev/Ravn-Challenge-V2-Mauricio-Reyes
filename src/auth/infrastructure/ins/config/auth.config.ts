import { registerAs } from '@nestjs/config';
import { get } from 'env-var';

export type AuthConfig = {
  jwt: {
    accessToken: { secret: string; expiration: string };
    // ? If refresh token is needed
    // refreshToken: { secret: string; expiration: string };
  };
};

export const authConfig = registerAs(
  'auth',
  () =>
    ({
      jwt: {
        accessToken: {
          secret: get('JWT_ACCESS_TOKEN_SECRET').required().asString(),
          expiration: get('JWT_ACCESS_TOKEN_EXPIRATION').required().asString(),
        },
      },
    }) as AuthConfig,
);
