import {
  DynamicModule,
  ForwardReference,
  Provider,
  Type,
} from '@nestjs/common';

export type Module =
  | Type<any>
  | DynamicModule
  | Promise<DynamicModule>
  | ForwardReference;

export interface AccessControlModuleConfig {
  UsersModule: Module;
  UserServiceToken: any;
  strategies: Strategy[];
  JWT_SECRET: string;
}

export interface Strategy {
  controllers: Type<any>[];
  providers: Provider<any>[];
}

export interface JwtParser<K> {
  parseUser<T>(user: T): K;
}
