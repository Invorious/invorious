import { Injectable } from '@nestjs/common';
import { GoogleAccountStrategyService } from 'packages/access-control/src/lib/strategies/google-account/services/google-account-strategy.service';

@Injectable()
export class AppService {
  constructor (
    private googleAccountStrategyService :GoogleAccountStrategyService
  ) { }

  getData(): { message: string } {
    const res = this.googleAccountStrategyService.authenticateInvorious()
    return { message: 'Desde libreria google '+res };
  }
}
