import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(token: string | null) {
    if (token) return { token }
    return { message: 'Desde libreria google' };
  }
}
