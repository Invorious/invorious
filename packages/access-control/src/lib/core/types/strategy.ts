import { Type, DynamicModule, ForwardReference } from '@nestjs/common';

export interface Strategy {
  module: Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference;
  getUser(): any;
  validateUser(user: any): boolean;
}
