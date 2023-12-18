import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';

export type PasswordEncryptorServiceMock = Partial<
  Record<keyof PasswordEncryptorService, jest.Mock>
>;

export const passwordEncryptorServiceMock = (): PasswordEncryptorService => ({
  encrypt: jest.fn(),
  compare: jest.fn(),
});
