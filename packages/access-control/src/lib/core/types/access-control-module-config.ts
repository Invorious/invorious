import { AccessControlCoreModuleConfig } from './acces-control-core-module-config';
import { NestJsModule } from './nest-js-module.type';
import { NestJSProvider } from './nest-js-provider.type';
import { Strategy } from './strategy';
export interface AccessControlModuleConfig
  extends AccessControlCoreModuleConfig {
  strategies: Strategy[];
  UserModule: NestJsModule;
  UserServiceToken: NestJSProvider;
  AccessControlModule: NestJsModule;
  AccessControlServiceToken: NestJSProvider;
}
