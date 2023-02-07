import { Type, DynamicModule, ForwardReference } from '@nestjs/common';

export interface Strategy {
  getModule():
    | Type<any>
    | DynamicModule
    | Promise<DynamicModule>
    | ForwardReference;
  getUser(): any;
  validateUser(): boolean;
}
