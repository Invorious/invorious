import { Module } from '@nestjs/common';
import { AccessControlClientService } from './access-control-client.service';

@Module({
  providers: [AccessControlClientService],
  exports: [AccessControlClientService],
})
export class AccessControlClientModule {}
