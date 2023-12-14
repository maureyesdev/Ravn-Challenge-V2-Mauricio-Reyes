import { Injectable } from '@nestjs/common';

@Injectable()
export class SignOutCommandHandler {
  execute() {
    // delete refresh token
    return true;
  }
}
