import { IStrategy } from '../../core/types/access-control.interface';
import { buildGoogleAccountController } from './controllers/google-account-strategy.controller';
import { GoogleAccountStrategyService } from './services/google-account-strategy.service';
import { IGoogleAccountStrategy } from './types';
import { tokenGoogleAccountConfig } from './utils';

export function googleStrategy(config: IGoogleAccountStrategy): IStrategy {
  const { routeGoogle, routeToRedirect, ...configGoogle } = config;

  return {
    controllers: [
      buildGoogleAccountController({ routeGoogle, routeToRedirect }),
    ],
    providers: [
      {
        provide: tokenGoogleAccountConfig,
        useValue: configGoogle,
      },
      GoogleAccountStrategyService,
    ],
  };
}
