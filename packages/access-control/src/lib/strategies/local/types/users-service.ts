import { IUsernameAndPassword } from './username-and-password.interface';

export interface IUsersService<T extends IUsernameAndPassword> {
  findByUsername(username: string): Promise<T>;
  deleteUser(id: number): Promise<T[]>;
}
