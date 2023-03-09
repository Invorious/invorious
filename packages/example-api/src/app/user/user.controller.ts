import { Controller, Get } from '@nestjs/common';
import { Access } from '../decorators/access.decorator';

@Controller('users')
export class UserController {
  @Get()
  @Access('USER:READ:ANY')
  getData() {
    return {};
  }
}
