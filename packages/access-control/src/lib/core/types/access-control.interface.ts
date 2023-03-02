import { ClassProvider } from '@nestjs/common';

import { IController, IModule, IProvider } from './nest.interface';
import { AccessControlCoreModuleConfig } from './access-control-core-module-config';

export interface AccessControlModuleConfig {
  AccessControlModule: IModule;
  AccessControlServiceToken: ClassProvider['useClass'] | IProvider;
  UsersModule: IModule;
  UsersServiceToken: ClassProvider['useClass'] | IProvider;
  jwtSecret: AccessControlCoreModuleConfig['jwtSecret'];
  jwtOptions: AccessControlCoreModuleConfig['jwtOptions'];
  strategies: IStrategy[];
}

export interface IStrategy {
  controllers: IController[];
  providers: IProvider[];
  imports?: IModule[];
}
