import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthUsersService } from '../auth-users/auth-users.service';
import { AuthUser } from '../auth-users/entities/auth-user.entity';

@Injectable()
export class AuthService {
  constructor(
    private authUsersService: AuthUsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<AuthUser | null> {
    const user = await this.authUsersService.findByUsername(username);
    if (user && (await this.validatePassword(pass, user))) return user;
    return null;
  }

  async validatePassword(pass: string, user: AuthUser) {
    return await bcrypt.compare(pass, user.password);
  }

  async login(user: AuthUser) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
