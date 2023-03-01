import { AccessControlCoreModuleConfig } from './acces-control-core-module-config';
import { NestJsModule } from './nestjs-module-type';
import { NestJSProvider } from './nestjs-provider-type';
import { Strategy } from './strategy';
export interface AccessControlModuleConfig extends AccessControlCoreModuleConfig {
  strategies: Strategy[];
  UserModule: NestJsModule;
  UserServiceToken: NestJSProvider;
  AccessControlModule: NestJsModule;
  AccessControlServiceToken: NestJSProvider;
}
