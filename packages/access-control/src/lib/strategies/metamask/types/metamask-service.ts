import { IMetamaskUser } from './metamask-user';

export interface IMetamaskService<T extends IMetamaskUser> {
  findByAddress(address: string): T;
  loginMessage: string;
}
