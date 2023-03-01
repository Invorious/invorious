import { NestJsController } from './nestjs-controller-type';
import { NestJsModule } from './nestjs-module-type';
import { NestJSProvider } from './nestjs-provider-type';

export interface Strategy {
  controllers: NestJsController[];
  providers: NestJSProvider[];
  imports?: NestJsModule[];
}
