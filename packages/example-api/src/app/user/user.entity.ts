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
  name: string | number;
  username: IUsernameAndPassword['username'];
  password: IUsernameAndPassword['password'];
  address: IMetamaskUserEntity['address'];
  email: IGoogleAccountUser['email'];
  googleId: IGoogleAccountUser['googleId'];
  permissions: Permission[];
}
