import { DynamicModule, Module } from '@nestjs/common';
import { AccessControlModuleConfig } from './core/types/access-control-module-config';

export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    return { 
      imports: config.strategies,
      module: AccessControlModule,
    }
  }
}

