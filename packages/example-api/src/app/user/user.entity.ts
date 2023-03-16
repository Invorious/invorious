import {
  IGoogleAccountUser,
  IMetamaskUserEntity,
  IUsernameAndPassword,
} from '@invorious/access-control';
import { Permission } from '../permission/permission.entity';

export class User
  implements IMetamaskUserEntity, IGoogleAccountUser, IUsernameAndPassword
{
  id: number;
  name: string;
  username: string;
  password: string;
  address: string;
  email: string;
  googleId: string | number;
  permissions: Permission[];
}
