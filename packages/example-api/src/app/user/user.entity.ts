import {
  IMetamaskUserEntity,
  IGoogleAccountUser,
  IUsernameAndPassword
} from '@invorious/access-control';

export class User implements IMetamaskUserEntity, IGoogleAccountUser, IUsernameAndPassword {
  address: string;
  username: string;
  password: string;
  id: number;
  googleId: string;
  email: string;
}
