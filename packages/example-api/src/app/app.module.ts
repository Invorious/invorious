import {
  AccessControlModule,
  LocalStrategyModule,
  MetamaskStrategyModule,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [LocalStrategyModule, MetamaskStrategyModule],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
