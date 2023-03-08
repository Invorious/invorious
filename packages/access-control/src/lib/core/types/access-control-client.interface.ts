import { IJwtParser } from './jwt.interface';

// eslint-disable-next-line
export interface IAccessControlClientService<T, K extends object>
  extends IJwtParser<T, K> {}
