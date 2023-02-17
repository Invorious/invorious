import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { LoginDto } from '../types/loginDto';
import { verifyMessage, getAddress } from 'ethers';

@Injectable()
export class MetamaskStrategyService {
  login(loginDto: LoginDto) {
    const { signature, address } = loginDto;
    const message = 'el mero login';
    const recoveredAddress = verifyMessage(message, signature);
    if (this.normalizeAddress(address) !== recoveredAddress) {
      throw new UnprocessableEntityException(
        'Signer does not match with address'
      );
    }
    return 'signed';
  }

  private normalizeAddress(address: string): string {
    return getAddress(address);
  }
}
