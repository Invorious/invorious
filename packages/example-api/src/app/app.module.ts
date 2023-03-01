import {
  InvoriousAccessControlModule,
  metamaskStrategy,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersService } from './users/services/users.service';
import { UsersModule } from './users/users.module';
import { AccessControlModule } from './access-control/access-control.module';
import { AccessControlService } from './access-control/services/access-control.service';

@Module({
  imports: [
    InvoriousAccessControlModule.forRoot({
      strategies: [metamaskStrategy()],
      UserModule: UsersModule,
      UserServiceToken: UsersService,
      AccessControlModule: AccessControlModule,
      AccessControlServiceToken: AccessControlService,
      jwtSecret: 'super-secreto',
      jwtOptions: { expiresIn: '60s' },
    }),
    UsersModule,
    AccessControlModule,
  ],
  providers: [AppService],
})
export class AppModule {}
