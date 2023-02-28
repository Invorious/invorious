import { Strategy } from "../../core/types/access-control-module-config";
import { buildGoogleAccountController } from "./controllers/google-account-strategy.controller";
import { GoogleAccountStrategyService } from "./services/google-account-strategy.service";
import { IGoogleAccountStrategy } from "./types";

export function googleAccountStrategy(config: IGoogleAccountStrategy): Strategy {
  const configGoogle = {
    GOOGLE_CLIENT_ID: config.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: config.GOOGLE_CLIENT_SECRET,
    GOOGLE_REDIRECT: config.GOOGLE_REDIRECT,
  }

  return {
    controllers: [
      buildGoogleAccountController({
        routeController: config.routeController,
      })
    ],
    providers: [
      {
        provide: 'google-account-config',
        useValue: configGoogle,
      },
      GoogleAccountStrategyService,
    ],
  };
}