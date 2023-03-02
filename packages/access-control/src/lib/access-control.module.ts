import { DynamicModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import {
  ACCESS_CONTROL_SERVICE,
  JWT_CONFIG_OPTIONS,
  USER_SERVICE,
} from './core/providers/service.provider';
import { accessControlCoreModule } from './core/access-control-core.module';
import { AccessControlModuleConfig } from './core/types/access-control.interface';
import { IController, IProvider } from './core/types/nest.interface';

export class InvoriousAccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const {
      AccessControlModule,
      AccessControlServiceToken,
      UsersModule,
      UsersServiceToken,
      jwtOptions,
      jwtSecret,
      strategies,
    } = config;

    const usedStrategies = [...strategies, accessControlCoreModule()];
    const controllers: IController[] = usedStrategies.flatMap(
      ({ controllers }) => controllers,
    );
    const providers: IProvider[] = usedStrategies.flatMap(
      ({ providers }) => providers,
    );

    return {
      imports: [
        AccessControlModule,
        UsersModule,
        PassportModule,
        JwtModule.register({
          secret: jwtSecret,
          signOptions: jwtOptions,
        }),
      ],
      exports: providers,
      controllers,
      providers: [
        { provide: USER_SERVICE, useExisting: UsersServiceToken },
        {
          provide: ACCESS_CONTROL_SERVICE,
          useExisting: AccessControlServiceToken,
        },
        { provide: JWT_CONFIG_OPTIONS, useValue: { jwtSecret, jwtOptions } },
        ...providers,
      ],
      module: InvoriousAccessControlModule,
    };
  }
}
