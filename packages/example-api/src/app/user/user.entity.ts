import { IUsernameAndPassword } from '@invorious/access-control';

export class User implements IUsernameAndPassword {
  username: string;
  password: string;
  id: number;
  address: string;
}
