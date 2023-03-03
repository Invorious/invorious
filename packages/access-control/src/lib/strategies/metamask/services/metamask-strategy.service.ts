import { Inject, Injectable } from '@nestjs/common';
import { verifyMessage } from 'ethers';
import { LoginDto } from '../types/login-dto';
import { IMetamaskUser } from '../types/metamask-user';
import { USER_SERVICE } from '../../../core/providers/user-service';
import { IMetamaskService } from '../types/metamask-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { JwtToken } from '../../../core/types/jwt-token';
import { UpdateDto } from '../types/update-dto';
@Injectable()
export class MetamaskStrategyService<K extends object> {
  constructor(
    @Inject(USER_SERVICE)
    private metamaskUserService: IMetamaskService<IMetamaskUser>,
    private coreService: AccessControlCoreService<IMetamaskUser, K>,
  ) {}

  async login(loginDto: LoginDto): Promise<JwtToken> {
    const { signature } = loginDto;
    const recoveredAddress = verifyMessage(
      this.metamaskUserService.loginMessage,
      signature,
    );
    let metamaskUser = this.metamaskUserService.findByAddress(recoveredAddress);
    if (!metamaskUser) {
      metamaskUser = await this.metamaskUserService.register({
        address: recoveredAddress,
      });
    }
    return this.coreService.generateToken(metamaskUser);
  }
  async update(updateDto: UpdateDto) {
    const { signature, address } = updateDto;
    const recoveredAddress = verifyMessage(
      this.metamaskUserService.requestMessage,
      signature,
    );
    if (address !== recoveredAddress) {
      throw new Error('Signature does not match with requested account');
    }
    return this.metamaskUserService.update(updateDto);
  }

  getById(id: number) {
    return this.metamaskUserService.findById(id);
  }
}
