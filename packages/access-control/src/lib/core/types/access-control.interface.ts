import { ClassProvider } from '@nestjs/common';
import { JwtModuleOptions } from '@nestjs/jwt';

import { IController, IModule, IProvider } from './nest.interface';

export interface IAccessControlModuleConfig {
  UserModule: IModule;
  UserService: ClassProvider['useClass'];
  AccessControlClientModule: IModule;
  AccessControlClientService: ClassProvider['useClass'];
  strategies: IStrategy[];
  jwtOptions: JwtModuleOptions;
}

export interface IStrategy {
  controllers: IController[];
  providers: IProvider[];
}

export interface IStrategyService<T> {
  deleteUser(id: number): Promise<T[]>;
  findById(id: number): Promise<T>;
}
