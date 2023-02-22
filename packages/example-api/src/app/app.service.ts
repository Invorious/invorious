import { Inject, Injectable } from '@nestjs/common';
import config, { ConfigType } from '@invorious/environments'

@Injectable()
export class AppService {
  constructor (
    @Inject(config.KEY) private configService: ConfigType,
  ) { }

  getData(): { message: string } {
    console.log(this.configService.database);
    return { message: 'Welcome to example-api!' };
  }
}
