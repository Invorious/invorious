import {
  AccessControlModule,
  metamaskStrategy,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { UsersService } from './users/services/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [metamaskStrategy()],
      UserModule: UsersModule,
      UserServiceToken: UsersService,
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
