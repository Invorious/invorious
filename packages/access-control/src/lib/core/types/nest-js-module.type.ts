import { DynamicModule, ForwardReference, Type } from '@nestjs/common';

export type NestJsModule =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference;
