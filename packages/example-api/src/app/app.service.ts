import { Inject, Injectable } from '@nestjs/common';
import config from '@invorious/environments'
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor (
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) { }

  getData(): { message: string } {
    console.log('aaaaa');
    console.log(process.env.NODE_ENV);
    console.log('aaaaa');
    
    return { message: 'Welcome to example-api!' };
  }
}
