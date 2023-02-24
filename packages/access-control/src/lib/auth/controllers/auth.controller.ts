import { Body, Controller, Post } from '@nestjs/common';
import { AuthUsersService } from '../../auth-users/auth-users.service';
import { AuthUser } from '../../auth-users/types/auth-user';

@Controller()
export class AuthController {
  constructor(private authUsersService: AuthUsersService) {}

  @Post('auth/register')
  async register(@Body() registerUserDto: AuthUser): Promise<AuthUser> {
    return await this.authUsersService.create(registerUserDto);
  }
}
