import { IStrategy } from '../../core/types/access-control.interface';
import { buildGoogleController } from './controllers/google-strategy.controller';
import { GoogleStrategyService } from './services/google-strategy.service';
import { tokenGoogleConfig } from './tokens';
import { IGoogleAccountStrategy } from './types';

export function googleStrategy(config: IGoogleAccountStrategy): IStrategy {
  const { routeGoogle, routeToRedirect, ...googleConfig } = config;

  console.log(config);

  return {
    controllers: [buildGoogleController({ routeGoogle, routeToRedirect })],
    providers: [
      {
        provide: tokenGoogleConfig,
        useValue: googleConfig,
      },
      GoogleStrategyService,
    ],
  };
}
