import { IJwtParser, IJwtPayload } from './jwt.interface';

// eslint-disable-next-line
export interface IAccessControlClientService<T, K extends IJwtPayload>
  extends IJwtParser<T, K> {}
