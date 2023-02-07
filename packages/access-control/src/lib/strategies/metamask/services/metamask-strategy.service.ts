import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { LoginDto } from '../types/loginDto';
import { verifyMessage } from 'ethers';
import { getAddress } from 'ethers/types/address';

@Injectable()
export class MetamaskStrategyService {
  login(loginDto: LoginDto) {
    const { address, signature, message } = loginDto;
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
