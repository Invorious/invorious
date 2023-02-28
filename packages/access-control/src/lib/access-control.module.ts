import { DynamicModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { USER_SERVICE } from './core/providers/service.provider';
import {
  AccessControlModuleConfig,
  Strategy,
} from './core/types/access-control-module-config';

export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { UsersModule, UserServiceToken, JWT_SECRET, strategies } = config;

    const providers: Strategy['providers'] = [];

    const controllers: Strategy['controllers'] = [];

    strategies.forEach((strategy) => {
      if (strategy.providers.length) {
        providers.push(...strategy.providers);
      }
      if (strategy.controllers.length) {
        controllers.push(...strategy.controllers);
      }
    });

    return {
      imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
          secret: JWT_SECRET,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      exports: providers,
      controllers,
      providers: [
        { provide: USER_SERVICE, useExisting: UserServiceToken },
        ...providers,
      ],
      module: AccessControlModule,
    };
  }
}
