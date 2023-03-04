import { IGoogleAccountUser } from '@invorious/access-control';

export class User implements IGoogleAccountUser {
  id: number;
  googleId: string;
  email: string;
}
