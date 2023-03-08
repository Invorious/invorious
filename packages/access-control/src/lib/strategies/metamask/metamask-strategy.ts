import { IStrategy } from '../../core/types/access-control.interface';
import { buildMetamaskStrategyController } from './controllers/metamask-strategy.controller';
import { MetamaskStrategyService } from './services/metamask-strategy.service';
import { IMetamaskStrategyControllerOptions } from './types/metamask-controller-options';
export interface MetamaskStrategyOptions {
  controllerOptions: IMetamaskStrategyControllerOptions;
}
export function metamaskStrategy(props?: MetamaskStrategyOptions): IStrategy {
  return {
    controllers: [buildMetamaskStrategyController(props?.controllerOptions)],
    providers: [MetamaskStrategyService],
  };
}
