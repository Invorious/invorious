import { IAuthorizationPermission } from '@invorious/authorization';

export class Permission implements IAuthorizationPermission {
  feature: string;
  action: string;
  possession: string;
}
