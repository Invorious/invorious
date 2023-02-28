import { IGoogleAccountService, ProfileResponseGoogle } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';

import { User } from './user.entity';

interface JwtPayload {
  id: number;
}

@Injectable()
export class UserService implements IGoogleAccountService<User, JwtPayload> {

  users: User[] = []
  
  parseUser(user: User) {
    return { id: user.id }
  }


  registerByGoogle(user: ProfileResponseGoogle): void {
    const newUser = new User();
    newUser.id = Date.now()
    newUser.email = user.emails[0].value
    newUser.googleId = user.id

    this.users.push(newUser)
  }

  findByGoogleId(googleId: string): User | null | undefined {
    return this.users.find(user => user.googleId == googleId)
  }

  async getData() {
    return { message: 'Welcome to example-api!' };
  }
}
