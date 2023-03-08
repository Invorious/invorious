import {
  AccessControlModule,
  googleStrategy,
  metamaskStrategy,
  localStrategy
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AccessControlClientModule } from './access-control-client/access-control-client.module';
import { AccessControlClientService } from './access-control-client/access-control-client.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      AccessControlClientModule,
      AccessControlClientService,
      UserModule,
      UserService,
      jwtOptions: {
        secret: 'aaaa',
      },
      strategies: [
        googleStrategy({
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: 'http://localhost:3333/api/google/register',
          routeGoogle: 'google/register',
          routeToRedirect: '/api',
        }),
        metamaskStrategy(),
        localStrategy()
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
