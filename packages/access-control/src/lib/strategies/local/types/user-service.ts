import { IUsernameAndPassword } from './username-and-password.interface';

export interface IUsersService<T extends IUsernameAndPassword> {
  findByUsername(username: string): T;
}
