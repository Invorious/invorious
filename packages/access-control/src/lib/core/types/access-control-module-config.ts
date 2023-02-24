import { Type } from '@nestjs/common';
import { Strategy } from './strategy';
export interface AccessControlModuleConfig {
  strategies: Strategy[];
  UserModule: Type<any>;
  UserServiceToken: any;
}
