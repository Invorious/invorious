import { IUserAndPass } from './user-and-pass.interface';

export interface IUsersService<T extends IUserAndPass> {
  findByUsername(username: string): Promise<T>;
  deleteUser(id: number): Promise<T[]>;
}
