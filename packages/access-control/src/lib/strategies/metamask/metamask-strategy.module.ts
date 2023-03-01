import { Strategy } from '../../core/types/strategy';
import { buildMetamaskStrategyController } from './controllers/metamask-strategy.controller';
import { MetamaskStrategyService } from './services/metamask-strategy.service';
import { IMetamaskStrategyControllerOptions } from './types/metamsak-controller-options';
export interface MetamaskStrategyOptions {
  controllerOptions: IMetamaskStrategyControllerOptions;
}
export function metamaskStrategy(props?: MetamaskStrategyOptions): Strategy {
  return {
    controllers: [buildMetamaskStrategyController(props?.controllerOptions)],
    providers: [MetamaskStrategyService],
  };
}
