import {
  InvoriousAccessControlModule,
  localStrategy,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccessControlModule } from './access-control/access-control.module';
import { UsersModule } from './users/users.module';
import { AccessControlService } from './access-control/services/access-control.service';
import { UsersService } from './users/services/users.service';

@Module({
  imports: [
    InvoriousAccessControlModule.forRoot({
      AccessControlModule,
      AccessControlServiceToken: AccessControlService,
      UsersModule,
      UsersServiceToken: UsersService,
      jwtSecret: 'secret',
      jwtOptions: { expiresIn: '60s' },
      strategies: [localStrategy()],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
