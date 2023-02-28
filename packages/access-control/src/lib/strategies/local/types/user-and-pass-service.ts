import { IUserAndPass } from './user-and-pass.interface';
import { JwtParser } from '../../../core/types/access-control-module-config';

export interface IUserAndPassService<T extends IUserAndPass, K>
  extends JwtParser<K> {
  findByUsername(username: string): T;
}
