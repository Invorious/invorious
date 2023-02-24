import { AccessControlModule, GoogleAccountStrategyModule, MetamaskStrategyModule } from '@invorious/access-control';
import { Global, Injectable, Module } from '@nestjs/common';
import { IObjectGoogleAccountStrategy } from 'packages/access-control/src/lib/strategies/google-account/types';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Injectable()
class UserService { }

@Module({
  providers: [UserService],
})
class UserModule { }

@Module({
  imports: [
    AccessControlModule.forRoot({
      UserModule,
      UserService,
      strategies: [
        {
          strategy: GoogleAccountStrategyModule,
          config: { }
        } as IObjectGoogleAccountStrategy,
        MetamaskStrategyModule,
      ]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
