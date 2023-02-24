import { Strategy } from '../../core/types/strategy';
import { MetamaskStrategyController } from './controllers/metamask-strategy.controller';
import { MetamaskStrategyService } from './services/metamask-strategy.service';

// @Module({
//   imports: [],
//   controllers: [MetamaskStrategyController],
//   providers: [MetamaskStrategyService],
// })
// export class MetamaskStrategyModule {}

export function metamaskStrategy(): Strategy {
  return {
    controllers: [MetamaskStrategyController],
    providers: [MetamaskStrategyService],
  };
}
