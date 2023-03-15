import {
  AccessControlModule,
  tokenUserService,
  metamaskStrategy,
  localStrategy,
  googleStrategy,
} from '@invorious/access-control';
import { Global, Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AccessControlClientModule } from './access-control-client/access-control-client.module';
import { AccessControlClientService } from './access-control-client/access-control-client.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

const providerUserService = {
  provide: tokenUserService,
  useExisting: UserService,
};

@Global()
@Module({
  imports: [
    UserModule,
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
          callbackURL: 'http://localhost:3333/api/google/callback',
          routeGoogle: 'google',
          routeToRedirect: 'http://localhost:4200/',
        }),
        metamaskStrategy(),
        localStrategy(),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, providerUserService, JwtService],
  exports: [providerUserService, JwtService],
})
export class AppModule {}
