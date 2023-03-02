import { MetamaskJwtPayload } from '@invorious/access-control';

export interface JwtPayload extends MetamaskJwtPayload {
  id: number;
}
