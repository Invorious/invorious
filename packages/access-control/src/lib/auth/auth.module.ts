import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './controllers/auth.controller';
import { jwtConstants } from '../core/jwt-constants';
import { JwtStrategy } from '../strategies/jwt/jwt.strategy';
import { LocalStrategy } from '../strategies/local/local.strategy';
import { AuthUsersModule } from '../auth-users/auth-users.module';

@Module({
  imports: [
    AuthUsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiration },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
