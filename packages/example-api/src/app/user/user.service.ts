import { Injectable } from '@nestjs/common';
import { IGoogleAccountService } from '@invorious/access-control';
import { User } from './user.entity';
import { Profile } from 'passport-google-oauth20';

@Injectable()
export class UserService implements IGoogleAccountService<User> {
  users: User[] = [];

  findByGoogleId(googleId: string): User {
    return this.users.find((user) => user.googleId === googleId);
  }
  registerByGoogle(user: Profile): void {
    this.users.push({
      email: user.emails[0].value,
      googleId: user.id,
      id: Date.now(),
    });
  }
}
