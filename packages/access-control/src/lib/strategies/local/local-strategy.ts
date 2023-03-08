import { buildLocalStrategyController } from './controllers/local-strategy.controller';
import { LocalStrategyService } from './services/local-strategy.service';
import { ILocalStrategyControllerOptions } from './types';
import { IStrategy } from '../../core/types/access-control.interface';

export interface LocalStrategyOptions {
  controllerOptions: ILocalStrategyControllerOptions;
}

export function localStrategy(props?: LocalStrategyOptions): IStrategy {
  return {
    controllers: [buildLocalStrategyController(props?.controllerOptions)],
    providers: [LocalStrategyService],
  };
}
