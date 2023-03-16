import { IPermission } from './permission.interface';

export interface IUser {
  id: number;
  name: string;
  googleId: string;
  email: string;
  permissions: IPermission[];
  address: string;
  username: string;
  password: string;
}
