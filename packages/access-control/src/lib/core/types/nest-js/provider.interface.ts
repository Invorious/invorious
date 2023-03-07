import { Provider, ClassProvider } from '@nestjs/common';

export type IProvider = Provider<any>;
export type IProviderValue = ClassProvider['useClass'];
