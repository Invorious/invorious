import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { tokenAccessControlClient, tokenUserService } from './core/tokens';
import { IAccessControlModuleConfig } from './core/types/access-control.interface';
import { IController, IProvider } from './core/types/nest.interface';

@Module({})
export class AccessControlModule {
  static forRoot(config: IAccessControlModuleConfig): DynamicModule {
    const {
      UserModule,
      UserService,
      jwtOptions,
      strategies,
      AccessControlClientModule,
      AccessControlClientService,
    } = config;
    const providers: IProvider[] = strategies.flatMap(
      (strategy) => strategy.providers,
    );
    const controllers: IController[] = strategies.flatMap(
      (strategy) => strategy.controllers,
    );

    return {
      imports: [
        UserModule,
        AccessControlClientModule,
        PassportModule,
        JwtModule.register(jwtOptions),
      ],
      exports: providers,
      controllers,
      providers: [
        { provide: tokenUserService, useExisting: UserService },
        {
          provide: tokenAccessControlClient,
          useExisting: AccessControlClientService,
        },
        ...providers,
      ],
      module: AccessControlModule,
    };
  }
}
