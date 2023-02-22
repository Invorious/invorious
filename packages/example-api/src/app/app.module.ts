import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AccessControlModule, MetamaskStrategyModule } from '@invorious/access-control';
import config, { environments, validationSchema } from '@invorious/environments'

import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema,
    }),
    AccessControlModule.forRoot({
      strategies: [MetamaskStrategyModule]
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
