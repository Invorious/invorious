import {
  AccessControlModule,
  MetamaskStrategy,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [new MetamaskStrategy()],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
