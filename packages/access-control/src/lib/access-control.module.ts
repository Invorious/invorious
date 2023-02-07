import { DynamicModule, Module } from '@nestjs/common';
import { AccessControlModuleConfig } from './core/types/access-control-module-config';

@Module({})
export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { strategies } = config;
    const importedModules = strategies.map((strategy) => strategy.getModule());
    return {
      imports: importedModules,
      module: AccessControlModule,
    };
  }
}
