import { DynamicModule, Module } from '@nestjs/common';
import { CoreModuleConfig } from './types/core-module-config';
import { CoreService } from './services/core.service';

@Module({
  providers: [CoreService],
})
export class CoreModule {
  static forRoot(configuration: CoreModuleConfig): DynamicModule {
    return {
      module: CoreModule,
      providers: [CoreService],
      exports: [CoreService],
    };
  }
}
