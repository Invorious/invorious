import { IUsernameAndPassword } from '@invorious/access-control';

export class User implements IUsernameAndPassword {
  id: number;
  username: string;
  password: string;
  address: string;
}
