import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccessControlModuleConfig, Strategy } from './core/types/access-control-module-config';

@Module({})
export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { UserModule, UserService, JWT_SECRET, strategies } = config;
    const providers: Strategy['providers']  = [];
    const controllers: Strategy['controllers'] = [];

    strategies.forEach(strategy => {
      if (strategy.providers.length) {
        providers.push(...(strategy.providers));
      }
      if (strategy.controllers.length) {
        controllers.push(...strategy.controllers);
      }
    })

    return { 
      imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
          secret: JWT_SECRET,
          signOptions: { expiresIn: '60s' },
        }),
      ],
      exports: providers,
      controllers,
      providers: [
        { provide: 'user-service', useExisting: UserService },
        ...providers,
      ],
      module: AccessControlModule,
    }
  }
}
