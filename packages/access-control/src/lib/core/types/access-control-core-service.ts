import { JwtParser } from './jwt-parser';

//placeholder interface
export interface IAccessControlCoreService<T, K extends object>
  extends JwtParser<T, K> {
  getRolesById(id: number): string[];
}
