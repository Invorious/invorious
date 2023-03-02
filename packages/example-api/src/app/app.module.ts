import { tokenUserService } from '@invorious/authorization';
import { Global, Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

const providerUserService = {
  provide: tokenUserService,
  useExisting: UserService,
};

@Global()
@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService, providerUserService],
  exports: [providerUserService],
})
export class AppModule {}
