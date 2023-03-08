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
  googleId: string;
  email: string;
  permissions: Permission[];
  address: string;
  username: string;
  password: string;
}
