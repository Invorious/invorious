import { Module } from '@nestjs/common';
import { MetamaskStrategyController } from './controllers/metamask-strategy.controller';
import { MetamaskStrategyService } from './services/metamask-strategy.service';

@Module({
  controllers: [MetamaskStrategyController],
  providers: [MetamaskStrategyService],
})
export class MetamaskStrategyModule {}
