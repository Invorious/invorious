import {
  AccessControlModule,
  JwtStrategyModule,
  LocalStrategyModule,
  MetamaskStrategyModule,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [
        JwtStrategyModule,
        LocalStrategyModule,
        MetamaskStrategyModule,
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
