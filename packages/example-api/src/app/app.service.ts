import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(token: string) {
    if (token) return { token };
    return { message: 'Welcome to example-api!' };
  }
}
