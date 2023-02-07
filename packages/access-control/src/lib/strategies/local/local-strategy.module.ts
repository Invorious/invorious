import { Module } from '@nestjs/common';
import { LocalStrategyController } from './controllers/local-strategy.controller';
import { LocalStrategyService } from './services/local-strategy.service';
import { AuthModule } from '../../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [LocalStrategyController],
  providers: [LocalStrategyService],
})
export class LocalStrategyModule {}
