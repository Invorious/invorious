import { IAuthorizationUser } from '@invorious/authorization';
import { Permission } from '../permission/permission.entity';

export class User implements IAuthorizationUser {
  id: number;
  name: string;
  permissions: Permission[];
}
