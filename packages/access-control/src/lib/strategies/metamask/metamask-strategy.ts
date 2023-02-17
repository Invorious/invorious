import { Strategy } from '../../core/types/strategy';
import { MetamaskStrategyModule } from './metamask-strategy.module';

export abstract class AbstractMetamaskStrategy<T> implements Strategy {
  constructor(public module = MetamaskStrategyModule) {}
  abstract getUser(): T;
  abstract validateUser(user: T): boolean;
}
