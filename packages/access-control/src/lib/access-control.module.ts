import { DynamicModule, Module } from '@nestjs/common';
import { AccessControlModuleConfig } from './core/types/access-control-module-config';

@Module({})
export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { strategies } = config;
    const imports = strategies.map((strat) => strat.module);
    return {
      imports,
      module: AccessControlModule,
    };
  }
}
