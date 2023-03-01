import { IStrategyService } from '../../../core/types/strategy-service';
import { IMetamaskUser } from './metamask-user';

export interface IMetamaskService<T extends IMetamaskUser>
  extends IStrategyService<T> {
  findByAddress(address: string): T;
}
