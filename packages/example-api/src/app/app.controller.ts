import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { Access } from './decorators/access.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Access('USEaaR:READ:ANY')
  getData() {
    return this.appService.getData();
  }
}
