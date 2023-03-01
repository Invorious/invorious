import { JwtSignOptions } from '@nestjs/jwt';

export interface AccessControlCoreModuleConfig {
  jwtSecret: string;
  jwtOptions: JwtSignOptions;
}
