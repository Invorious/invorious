import { DynamicModule, Module, Provider } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CoreModuleConfig } from './types/core-module-config';
import { CoreService } from './services/core.service';

@Module({
  providers: [CoreService],
})
export class CoreModule {
  static forRoot(configuration: CoreModuleConfig): DynamicModule {
    // const { userProvider } = configuration;
    return {
      module: CoreModule,
      imports: [JwtModule],
      providers: [],
      exports: [CoreService],
    };
  }
}
