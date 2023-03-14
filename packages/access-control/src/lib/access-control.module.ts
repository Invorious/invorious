import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { buildUserManagementController } from './core/controllers/user-management-controller';
import { AccessControlCoreService } from './core/services/access-control-core.service';

import {
  tokenAccessControlClient,
  tokenJWTConfig,
  tokenUserService,
} from './core/tokens';
import { IAccessControlModuleConfig } from './core/types/access-control.interface';
import { IController, IProvider } from './core/types/nest-js';

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
      controllers: [buildUserManagementController(), ...controllers],
      providers: [
        { provide: tokenUserService, useExisting: UserService },
        { provide: tokenJWTConfig, useValue: jwtOptions },
        {
          provide: tokenAccessControlClient,
          useExisting: AccessControlClientService,
        },
        AccessControlCoreService,
        ...providers,
      ],
      module: AccessControlModule,
    };
  }
}
