import { DynamicModule, Module } from '@nestjs/common';
import { Provider, Type } from '@nestjs/common/interfaces';
import { USER_SERVICE } from './core/providers/user-service';
import { AccessControlModuleConfig } from './core/types/access-control-module-config';
import { CoreModule } from './core/core.module';

export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { strategies, UserModule, UserServiceToken } = config;
    // {
    //   controllers: [MetamaskStrategyController],
    //   providers: [MetamaskStrategyService],
    // }
    const improtedControllers: Type<any>[] = [];
    const userProvider: Provider = {
      provide: 'USER_SERVICE',
      useExisting: UserServiceToken,
    };
    const importedProviders: Provider<any>[] = [userProvider];
    strategies.forEach((strategy) => {
      const { controllers, providers } = strategy;

      if (controllers) {
        improtedControllers.push(...controllers);
      }
      if (providers) {
        importedProviders.push(...providers);
      }
    });
    // console.log('puto el que lo lea');
    console.log('Controllers → ', improtedControllers);
    console.log('PRoviders → ', importedProviders);

    return {
      // imports: [...strategies, CoreModule.forRoot({ userProvider })],
      // exports: [userProvider],
      imports: [UserModule],
      providers: importedProviders,
      controllers: improtedControllers,
      module: AccessControlModule,
    };
  }
}
