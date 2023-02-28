import { IStrategy } from "../../core/types/access-control.interface";
import { MetamaskStrategyController } from "./controllers/metamask-strategy.controller";
import { MetamaskStrategyService } from "./services/metamask-strategy.service";

export function metamaskStrategy(): IStrategy {
  return {
    controllers: [MetamaskStrategyController],
    providers: [MetamaskStrategyService],
  };
}