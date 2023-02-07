import { 
  AccessControlModule, 
  GoogleAccountStrategyModule,
  MetamaskStrategyModule
} from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [
        GoogleAccountStrategyModule.forRoot({
          GOOGLE_CLIENT_ID    : process.env.GOOGLE_CLIENT_ID,
          GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
          GOOGLE_REDIRECT     : process.env.GOOGLE_REDIRECT,
        }),
        MetamaskStrategyModule,
      ],
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
