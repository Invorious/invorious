import { IMetamaskUser } from '../../strategies/metamask/types/metamask-user';

export interface IUserService extends IMetamaskUser {
  placeholder(): void;
}
