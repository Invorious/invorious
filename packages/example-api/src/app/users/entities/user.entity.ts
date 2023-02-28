import { IUserAndPass } from '@invorious/access-control';
import { IMetamaskUser } from '@invorious/access-control';

export class User implements IUserAndPass, IMetamaskUser {
  id: number;
  username: string;
  password: string;
  address: string;
}
