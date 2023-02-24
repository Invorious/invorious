import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getData(): any {
    return { message: 'Welcome to example-api!' };
  }
}
