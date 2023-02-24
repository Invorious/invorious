import { IMetamaskService, IMetamaskUser } from '@invorious/access-control';
import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
@Injectable()
export class Orders {
  holi = 'holi';
  hello() {
    return this.holi;
  }
}
@Injectable()
export class UsersService implements IMetamaskService {
  users: User[] = [];
  constructor(private orderService: Orders) {
    console.log('From client uwu → ', orderService);
  }
  findByAddress(address: string): IMetamaskUser {
    throw new Error('Method not implemented.');
  }
}
