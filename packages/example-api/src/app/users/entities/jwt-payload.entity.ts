import { IUserAndPassPayload } from '@invorious/access-control';

export class JwtPayload implements IUserAndPassPayload {
  id: number;
}
