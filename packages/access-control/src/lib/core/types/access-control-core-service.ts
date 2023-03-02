import { JwtParser } from './jwt-parser.interface';

export interface IAccessControlCoreService<T, K extends object>
  extends JwtParser<T, K> {
  getRolesById(id: number): string[];
}
