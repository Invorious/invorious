import { JwtParser } from '../../../core/types/jwt-parser';
import { IMetamaskUser } from './metamask-user';

export interface IMetamaskService<T extends IMetamaskUser,K> extends JwtParser<K> {
  findByAddress(address: string): T;
}
