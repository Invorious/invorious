import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { LoginDto } from '../types/login-dto';
import { verifyMessage, getAddress } from 'ethers';
import { LOGIN_MESSAGE } from '../types/login-message';
import { IMetamaskUser } from '../types/metamask-user';
import { USER_SERVICE } from '../../../core/providers/service.provider';
import { IMetamaskService } from '../types/metamask-service';

@Injectable()
export class MetamaskStrategyService {
  constructor(
    @Inject(USER_SERVICE) private metamaskUserService: IMetamaskService,
  ) {
    console.log('From lib metamask uwu → ', metamaskUserService);
  }

  login(loginDto: LoginDto) {
    const { signature, address } = loginDto;
    const recoveredAddress = verifyMessage(LOGIN_MESSAGE, signature);
    if (this.normalizeAddress(address) !== recoveredAddress) {
      throw new UnprocessableEntityException(
        'Signer does not match with address',
      );
    }
    const metamaskUser = this.authenticate(address);
    if (!metamaskUser) {
      throw new UnprocessableEntityException(
        'Address is not registered as an active user, please follow registration steps',
      );
    }
    return metamaskUser;
  }
  authenticate(address: string): boolean | IMetamaskUser {
    const metamaskUser = this.metamaskUserService.findByAddress(address);
    if (metamaskUser.address === address) {
      return metamaskUser;
    }
    return false;
  }
  private normalizeAddress(address: string): string {
    return getAddress(address);
  }
}
