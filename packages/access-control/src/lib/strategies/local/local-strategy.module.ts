import { LocalStrategyController } from './controllers/local-strategy.controller';
import { LocalStrategyService } from './services/local-strategy.service';
import { Strategy } from '../../core/types/access-control-module-config';

export function localStrategy(): Strategy {
  return {
    controllers: [LocalStrategyController],
    providers: [LocalStrategyService],
  };
}
