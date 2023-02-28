import { DynamicModule, ForwardReference, Provider, Type } from "@nestjs/common";

export type IModule = Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference;
export type IProvider = Provider<any>
export type IController = Type<any>