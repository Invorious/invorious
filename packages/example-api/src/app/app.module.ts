import { AccessControlModule, MetamaskStrategyModule } from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [MetamaskStrategyModule]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
