import { IMetamaskUser } from './metamask-user';

export interface UpdateDto extends Partial<IMetamaskUser> {
  signature: string;
}
