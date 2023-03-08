import { IMetamaskUser } from '@invorious/access-control';

export class User implements IMetamaskUser {
  address: string;
  username: string;
  id: number;
}
