import {
  AccessControlModule,
  tokenUserService,
} from '@invorious/access-control';
import { Global, Module } from '@nestjs/common';

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
      strategies: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, providerUserService],
  exports: [providerUserService],
})
export class AppModule {}
