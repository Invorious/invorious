export interface IAuthorizationService<T extends IAuthorizationPermission> {
  findPermissionsById(id: number): T[];
}

export interface IAuthorizationUser {
  id: number;
}

export interface IAuthorizationPermission {
  feature: string;
  action: string;
  possession: string;
}
