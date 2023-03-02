import { DynamicModule } from '@nestjs/common';
import { USER_SERVICE } from './core/providers/user-service';
import { AccessControlModuleConfig } from './core/types/access-control-module-config';
import { ACCESS_CONTROL_SERVICE } from './core/providers/access-control-service';
import { JwtModule } from '@nestjs/jwt';
import { NestJSProvider } from './core/types/nest-js-provider.type';
import { JWT_CONFIG_OPTIONS } from './core/providers/jwt-config-service';
import { PassportModule } from '@nestjs/passport';
import { AccessControlCoreService } from './core/services/access-control-core.service';

export class InvoriousAccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const {
      strategies,
      UserModule,
      UserServiceToken,
      AccessControlModule,
      AccessControlServiceToken,
      jwtSecret,
      jwtOptions,
    } = config;
    const usedStrategies = [...strategies];
    const userProvider = {
      provide: USER_SERVICE,
      useExisting: UserServiceToken,
    };
    const accessControlProvider = {
      provide: ACCESS_CONTROL_SERVICE,
      useExisting: AccessControlServiceToken,
    };
    const jwtConfigProvider: NestJSProvider = {
      provide: JWT_CONFIG_OPTIONS,
      useValue: { jwtSecret, jwtOptions },
    };
    const importedProviders = usedStrategies.flatMap(
      ({ providers }) => providers,
    );
    const controllers = usedStrategies.flatMap(
      ({ controllers }) => controllers,
    );
    return {
      imports: [
        UserModule,
        AccessControlModule,
        PassportModule,
        JwtModule.register({
          secret: jwtSecret,
          signOptions: jwtOptions,
        }),
      ],
      providers: [
        userProvider,
        accessControlProvider,
        jwtConfigProvider,
        AccessControlCoreService,
        ...importedProviders,
      ],
      controllers,
      module: InvoriousAccessControlModule,
    };
  }
}
