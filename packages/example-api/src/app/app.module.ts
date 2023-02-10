import {
  AccessControlModule,
  JwtStrategyModule,
  LocalStrategyModule,
  MetamaskStrategyModule,
} from '@invorious/access-control';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      // synchronize: !!process.env.DB_SYNC
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
