import { Module } from '@nestjs/common';
import { LocalStrategyController } from './controllers/local-strategy.controller';
import { LocalStrategyService } from './services/local-strategy.service';

@Module({
  controllers: [LocalStrategyController],
  providers: [LocalStrategyService],
})
export class LocalStrategyModule {}
