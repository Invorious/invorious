import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AccessControlModuleConfig } from './core/types/access-control.interface';
import { IController, IProvider } from './core/types/nest.interface';
import { tokenUserService } from './strategies/google-account/utils';

@Module({})
export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { UserModule, UserService, jwtOptions, strategies } = config;
    const providers: IProvider[]  = strategies.flatMap(strategy => strategy.providers);
    const controllers: IController[] = strategies.flatMap(strategy => strategy.controllers);

    return { 
      imports: [
        UserModule,
        PassportModule,
        JwtModule.register(jwtOptions),
      ],
      exports: providers,
      controllers,
      providers: [
        { provide: tokenUserService, useExisting: UserService },
        ...providers,
      ],
      module: AccessControlModule,
    }
  }
}
