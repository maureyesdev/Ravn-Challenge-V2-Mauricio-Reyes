import { User } from '@quickcart/users/domain/entities/user';

export const userMock: Omit<User, 'password'> = {
  id: 1,
  email: 'client@ravn.com',
  role: 'User',
  status: 'PendingVerification',
};
