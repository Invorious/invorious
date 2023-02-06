import { DynamicModule, ForwardReference, Type } from "@nestjs/common";

export interface AccessControlModuleConfig {
  strategies: Array<Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference>,
}