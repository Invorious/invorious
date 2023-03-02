import { IUserAndPass } from './user-and-pass.interface';

export interface IUserAndPassService<T extends IUserAndPass> {
  findByUsername(username: string): T;
}
