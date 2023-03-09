import { IAuthorizationPermission } from '@invorious/access-control';

export class Permission implements IAuthorizationPermission {
  feature: string;
  action: string;
  possession: string;
}
