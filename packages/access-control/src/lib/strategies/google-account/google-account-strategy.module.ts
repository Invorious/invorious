import { DynamicModule, Injectable, Module, Provider } from "@nestjs/common";
import { buildController } from "./controllers/google-account-strategy.controller";
import { GoogleAccountStrategyService } from "./services/google-account-strategy.service";
import { IGoogleAccountController, IGoogleAccountModule } from "./types";

const configBase: IGoogleAccountController = {
  routeController: '',
  routeCallback: 'auth/google/callback',
  routeInit: '',
}

@Injectable()
class Test { }

@Module({
  controllers: [
    buildController(configBase)
  ],
  providers: [
    GoogleAccountStrategyService,
  ],
})
export class GoogleAccountStrategyModule {
  static forRoot(data: IGoogleAccountModule): DynamicModule {
    return {
      imports: data.imports,
      controllers: [
        buildController({
          ...configBase,
          ...data.config,
        })
      ],
      providers: [
        ...data.providers,
        GoogleAccountStrategyService,
      ],
      exports: [GoogleAccountStrategyService],
      module: GoogleAccountStrategyModule,
    }
  }
}

