import { Inject, Injectable } from '@nestjs/common';
import { USER_SERVICE } from '../providers/user-service';
import { IUserService } from '../types/user-service';

@Injectable()
export class CoreService {
  constructor(@Inject(USER_SERVICE) private userService: IUserService) {
    console.log('haha', userService);
  }
}
