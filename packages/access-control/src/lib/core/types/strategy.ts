import { NestJsController } from './nest-js-controller.type';
import { NestJsModule } from './nest-js-module.type';
import { NestJSProvider } from './nest-js-provider.type';

export interface Strategy {
  controllers: NestJsController[];
  providers: NestJSProvider[];
  imports?: NestJsModule[];
}
