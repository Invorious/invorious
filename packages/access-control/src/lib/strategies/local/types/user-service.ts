import { IUsernameAndPassword } from './username-and-password.interface';

export interface IUsersService<T extends IUsernameAndPassword> {
  findByUsername(username: string): Promise<T>;
  findUserById(id: number): Promise<T>;
  deleteUser(id: number): Promise<T[]>;
}
