import { IMetamaskUser } from './metamask-user';

export interface IMetamaskService {
  findByAddress(address: string): IMetamaskUser;
}
