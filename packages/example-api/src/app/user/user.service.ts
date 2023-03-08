import {
  IMetamaskService,
  IGoogleAccountService,
} from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Profile } from 'passport-google-oauth20';
@Injectable()
export class UserService
  implements IMetamaskService<User>, IGoogleAccountService<User>, IUsersService<User>
{
  users: User[] = [];

  findByAddress(address: string): User {
    return this.users.find((user) => user.address === address);
  }

  update(id: number, data: Partial<User>) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, username: data.username };
      }
      return user;
    });
    return this.findById(id);
  }
  register(data: Partial<User>) {
    const id = this.users[this.users.length - 1].id + 1;
    const newUser: User = {
      id,
      address: data.address,
      username: data.username,
      password:'',
      email: '',
      googleId: '',
    };
    this.users.push(newUser);
    return newUser;
  }

  findById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  async deleteUser(id: number) {
    return this.users.filter((user) => user.id !== id);
  }
  findByGoogleId(googleId: string): User {
    return this.users.find((user) => user.googleId === googleId);
  }
  registerByGoogle(user: Profile): void {
    this.users.push({
      email: user.emails[0].value,
      googleId: user.id,
      id: Date.now(),
      address: '',
      username: '',
      password: ''
    });
  }
  get loginMessage() {
    return 'Welcome back you beatiful bastard, please sign this message to login, xoxo in your butty';
  }

  get updateMessage() {
    return `You're about to modify your profile information, give me your autograph baby`;
  }
}
