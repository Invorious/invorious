import {
  AccessControlModule,
  localStrategy,
  metamaskStrategy,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      UsersModule,
      UserServiceToken: UsersService,
      JWT_SECRET: 'secret',
      strategies: [metamaskStrategy(), localStrategy()],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
