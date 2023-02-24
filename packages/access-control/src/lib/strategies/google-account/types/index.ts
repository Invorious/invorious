import { ClassProvider } from "@nestjs/common";
import { TypeModule } from "../../../core/types/access-control-module-config";

export interface IGoogleAccountModule {
  config: IGoogleAccountController;
  imports: Array<TypeModule>;
  providers: Array<ClassProvider['useClass']>;
}

export interface IObjectGoogleAccountStrategy {
  strategy: TypeModule;
  config: IGoogleAccountController;
}

export interface IGoogleAccountController {
  routeController ?: string;
  routeCallback   ?: string;
  routeInit       ?: string;
}

export interface IGoogleAccountService {
  findByGoogleId(googleId: string): IGoogleAccountUser;
}

export interface IGoogleAccountUser {
  googleId: string;
}