import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthUsersService } from './auth-users.service';
import { AuthUser } from './entities/auth-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuthUser])],
  providers: [AuthUsersService],
  exports: [AuthUsersService],
})
export class AuthUsersModule {}
