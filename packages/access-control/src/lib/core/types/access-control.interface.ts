import { ClassProvider } from '@nestjs/common';
import { JwtModuleOptions } from '@nestjs/jwt';
import { JwtParser } from './jwt.interface';

import { IController, IModule, IProvider } from './nest.interface';

export interface IAccessControlModuleConfig {
  UserModule: IModule;
  UserService: ClassProvider['useClass'] | IProvider;
  AccessControlClientModule: IModule;
  AccessControlClientService: ClassProvider['useClass'] | IProvider;
  strategies: IStrategy[];
  jwtOptions: JwtModuleOptions;
}

export interface IStrategy {
  controllers: IController[];
  providers: IProvider[];
}

// eslint-disable-next-line
export interface IAccessControlClientService<T, K extends object>
  extends JwtParser<T, K> {}
