import { DynamicModule, ForwardReference, Type } from '@nestjs/common';

export type IModule =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference;
