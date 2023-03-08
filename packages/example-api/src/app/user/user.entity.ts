import {
  IAuthorizationUser,
  IGoogleAccountUser,
} from '@invorious/access-control';
import { Permission } from '../permission/permission.entity';

export class User implements IAuthorizationUser, IGoogleAccountUser {
  id: number;
  name: string;
  googleId: string;
  email: string;
  permissions: Permission[];
}
