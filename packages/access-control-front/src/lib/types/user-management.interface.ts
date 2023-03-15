export interface IUserManagement {
  register<T>(data: Partial<T>): Promise<T>;
}
