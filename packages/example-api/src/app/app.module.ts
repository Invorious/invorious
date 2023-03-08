import { AccessControlModule } from '@invorious/access-control';
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
      strategies: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
