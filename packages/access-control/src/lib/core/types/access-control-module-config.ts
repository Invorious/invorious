import { ClassProvider, DynamicModule, ForwardReference, Provider, Type } from "@nestjs/common";

export type TypeModule = Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference;
export interface AccessControlModuleConfig {
  UserModule: TypeModule,
  UserService: ClassProvider['useClass'],
  strategies: Array<TypeModule | StrategyObject>,
}

export interface StrategyObject {
  strategy: TypeModule;
  config: any;
}

export interface IAccessControlModule {
  authenticateInvorious(): boolean
}