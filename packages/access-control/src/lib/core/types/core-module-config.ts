import { Provider } from '@nestjs/common';

export interface CoreModuleConfig {
  userProvider: Provider;
}
