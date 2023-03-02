import { Controller, Get } from '@nestjs/common';
import { Access } from '../decorators/access.decorator';

@Controller()
export class UserController {
  @Get()
  @Access('USER:READ:ANY')
  getData() {
    return 'aaaaaaaa';
  }
}
