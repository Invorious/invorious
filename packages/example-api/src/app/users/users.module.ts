import { Module } from '@nestjs/common';
import { UsersService, Orders } from './services/users.service';

@Module({
  providers: [UsersService, Orders],
  exports: [UsersService],
})
export class UsersModule {}
