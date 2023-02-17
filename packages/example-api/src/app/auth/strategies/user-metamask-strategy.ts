import { AbstractMetamaskStrategy } from '@invorious/access-control';
import { Web3User } from '../types/web3-user';

export class MetamaskStrategy extends AbstractMetamaskStrategy<Web3User> {
  getUser(): Web3User {
    return { address: 'huehue' };
  }
  validateUser(user: Web3User): boolean {
    const { address } = user;
    if (address) return true;
    return false;
  }
}

export const ClientStrategy = new MetamaskStrategy();
