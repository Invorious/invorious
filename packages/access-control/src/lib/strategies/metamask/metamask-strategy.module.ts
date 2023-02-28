import { Strategy } from "../../core/types/access-control-module-config";
import { MetamaskStrategyController } from "./controllers/metamask-strategy.controller";
import { MetamaskStrategyService } from "./services/metamask-strategy.service";

export function metamaskStrategy(): Strategy {
  return {
    controllers: [MetamaskStrategyController],
    providers: [MetamaskStrategyService],
  };
}