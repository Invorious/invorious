import { AccessControlModule } from '@invorious/access-control';
import { Module } from '@nestjs/common';

import { AppService } from './app.service';
import { ClientStrategy } from './auth/strategies/user-metamask-strategy';

@Module({
  imports: [
    AccessControlModule.forRoot({
      strategies: [ClientStrategy],
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
