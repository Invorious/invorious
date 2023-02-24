import { Type, Provider } from '@nestjs/common';

export interface Strategy {
  controllers: Type<any>[] | undefined;
  providers: Provider<any>[] | undefined;
}
