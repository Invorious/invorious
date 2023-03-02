import { JwtParser } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../../users/entities/user.entity';
import { JwtPayload } from '../../users/interfaces/jwt-payload';

@Injectable()
export class AccessControlService implements JwtParser<User, JwtPayload> {
  parseUser(user): JwtPayload {
    return { id: user.id };
  }
}
