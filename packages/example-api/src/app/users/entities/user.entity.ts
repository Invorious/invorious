import { IUserAndPass } from '@invorious/access-control';

export class User implements IUserAndPass {
  id: number;
  username: string;
  password: string;
  address: string;
}
