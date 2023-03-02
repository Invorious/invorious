import { AccessControlCoreService } from './services/access-control-core.service';
import { IStrategy } from './types/access-control.interface';

export function accessControlCoreModule(): IStrategy {
  return {
    providers: [AccessControlCoreService],
    controllers: [],
  };
}
