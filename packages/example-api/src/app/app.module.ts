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
      jwtOptions: {
        secret: 'aaa',
        signOptions: { expiresIn: '60s' },
      },
      strategies: [
        googleAccountStrategy({
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: 'http://localhost:3333/api/google/register',
          routeGoogle: 'google/register',
          routeToRedirect: '/api'
        }),
        metamaskStrategy(),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
