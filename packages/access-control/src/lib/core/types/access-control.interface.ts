import { ClassProvider } from "@nestjs/common";
import { JwtModuleOptions } from "@nestjs/jwt";

import { IController, IModule, IProvider } from "./nest.interface";


export interface AccessControlModuleConfig {
  UserModule: IModule,
  UserService: ClassProvider['useClass'] | IProvider,
  strategies: IStrategy[],
  jwtOptions: JwtModuleOptions;
}

export interface IStrategy {
  controllers: IController[];
  providers: IProvider[];
}