import { Module } from '@nestjs/common';
import { JwtStrategyController } from './controllers/jwt-strategy.controller';
import { JwtStrategyService } from './services/jwt-strategy.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [JwtStrategyController],
  providers: [JwtStrategyService],
  exports: [JwtStrategyService],
})
export class JwtStrategyModule {}
