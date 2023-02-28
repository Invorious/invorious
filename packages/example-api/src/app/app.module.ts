import {
  AccessControlModule,
  googleAccountStrategy,
  metamaskStrategy
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      UserModule,
      UserService,
      JWT_SECRET: 'secret',
      strategies: [
        googleAccountStrategy({
          GOOGLE_CLIENT_ID: '366270697296-lcbqobgi33460arb3g1pg2tc5f2l753j.apps.googleusercontent.com',
          GOOGLE_CLIENT_SECRET: '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',
          GOOGLE_REDIRECT: 'http://localhost:3333/api/google/register',
          routeController: 'google/register',
        }),
        metamaskStrategy(),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
