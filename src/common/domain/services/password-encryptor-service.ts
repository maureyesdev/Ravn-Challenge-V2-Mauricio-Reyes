export abstract class PasswordEncryptorService {
  abstract encrypt(password: string): Promise<string>;
  abstract compare(
    password: string,
    encryptedPassword: string,
  ): Promise<boolean>;
}
