import { AccessControlCoreService } from './services/access-control-core.service';
import { Strategy } from './types/strategy';

export function accessControlCoreModule(): Strategy {
  return {
    providers: [AccessControlCoreService],
    controllers: [],
  };
}
