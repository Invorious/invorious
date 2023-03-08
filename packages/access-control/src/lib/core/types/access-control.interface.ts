import { JwtModuleOptions } from '@nestjs/jwt';

import { IController, IModule, IProvider, IProviderValue } from './nest-js';

export interface IAccessControlModuleConfig {
  UserModule: IModule;
  UserService: IProviderValue;
  AccessControlClientModule: IModule;
  AccessControlClientService: IProviderValue;
  strategies: IStrategy[];
  jwtOptions: JwtModuleOptions;
}

export interface IStrategy {
  controllers: IController[];
  providers: IProvider[];
}
