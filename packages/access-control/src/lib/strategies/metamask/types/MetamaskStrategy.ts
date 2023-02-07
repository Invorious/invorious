import { Strategy } from '../../../core/types/strategy';
import { MetamaskStrategyModule } from '../metamask-strategy.module';

export class MetamaskStrategy<T> implements Strategy {
  getModule() {
    return MetamaskStrategyModule;
  }

  getUser(): T {
    return {} as T;
  }

  validateUser(): boolean {
    return false;
  }
}
