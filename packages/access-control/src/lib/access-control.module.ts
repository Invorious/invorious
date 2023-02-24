import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccessControlModuleConfig, StrategyObject } from './core/types/access-control-module-config';

@Module({})
export class AccessControlModule {
  static forRoot(config: AccessControlModuleConfig): DynamicModule {
    const { UserModule, strategies, UserService } = config
    const importsShared = [
      UserModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.SECRET_JWT,
        signOptions: { expiresIn: '60s' },
      }),
    ]
    const providersShared = [{ provide: 'user-service', useClass: UserService }]
    const modules = strategies.map((strategy) => {
      const strategyShared: any = {
        imports: importsShared,
        providers: providersShared,
      }

      if (typeof strategy == 'function') 
        return 'forRoot' in (strategy as any) ? (strategy as any).forRoot(strategyShared) : strategy

      strategyShared.config = (strategy as StrategyObject).config;
      return (strategy as any).strategy.forRoot(strategyShared)
    })

    return { 
      imports: modules,
      exports: modules,
      module: AccessControlModule,
    }
  }
}
