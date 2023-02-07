import { DynamicModule, Module } from "@nestjs/common";
import { buildController } from "./controllers/google-account-strategy.controller";
import { GoogleAccountStrategyService } from "./services/google-account-strategy.service";
import { GoogleAccountStrategyModuleConfig } from "./types/google-account-strategy-module-config";

const configBase = {
  routeController: '',
  routeCallback: 'auth/google/callback',
  routeInit: '',
}

export class GoogleAccountStrategyModule {
  static forRoot(data: GoogleAccountStrategyModuleConfig): DynamicModule {
    return { 
      controllers: [
        buildController({
          ...configBase,
          ...data,
        })
      ],
      providers: [
        GoogleAccountStrategyService,
      ],
      module: this,
    }
  }
}