import { SignUpCommand } from '@quickcart/auth/application/commands/sign-up/sign-up-command';

export const signUpCommandMock: SignUpCommand = {
  data: {
    email: 'user@ravn.com',
    password: 'qwerty12345',
  },
};
