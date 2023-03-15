import { IStrategyService } from '../../../core/types/strategy-service.interface';
import { IMetamaskUserEntity } from './metamask-user';

export interface IMetamaskService<T extends IMetamaskUserEntity>
  extends IStrategyService<T> {
  findByAddress(address: string): Promise<T[]> | T;
  loginMessage: string;
}
