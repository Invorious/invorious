import {
  DynamicModule,
  ForwardReference,
  Provider,
  Type,
} from '@nestjs/common';

export type IController = Type<any>;
export type IProvider = Provider<any>;
export type IModule =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference;
