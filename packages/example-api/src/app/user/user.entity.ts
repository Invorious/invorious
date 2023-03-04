import { IAuthorizationUser } from '@invorious/access-control';
import { Permission } from '../permission/permission.entity';

export class User implements IAuthorizationUser {
  id: number;
  name: string;
  permissions: Permission[];
}
