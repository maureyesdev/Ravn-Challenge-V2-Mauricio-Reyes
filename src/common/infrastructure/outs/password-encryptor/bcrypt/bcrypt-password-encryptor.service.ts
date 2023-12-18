import { Injectable } from '@nestjs/common';
import { compare, hash } from 'bcryptjs';
import { PasswordEncryptorService } from '@quickcart/common/domain/services/password-encryptor-service';

@Injectable()
export class BcryptPasswordEncryptorService
  implements PasswordEncryptorService
{
  async encrypt(password: string): Promise<string> {
    return await hash(password, 10);
  }
  async compare(password: string, encryptedPassword: string): Promise<boolean> {
    return await compare(password, encryptedPassword);
  }
}
