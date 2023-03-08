import {
  IMetamaskUserEntity,
  IGoogleAccountUser,
} from '@invorious/access-control';

export class User implements IMetamaskUserEntity, IGoogleAccountUser {
  address: string;
  username: string;
  id: number;
  googleId: string;
  email: string;
}
