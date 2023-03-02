import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '../types/login-dto';
import { verifyMessage } from 'ethers';
import { IMetamaskUser } from '../types/metamask-user';
import { USER_SERVICE } from '../../../core/providers/user-service';
import { IMetamaskService } from '../types/metamask-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { JwtToken } from '../../../core/types/jwt-token';
import { MetamaskJwtPayload } from '../types/metamask-jwt-payload';
@Injectable()
export class MetamaskStrategyService<K extends MetamaskJwtPayload> {
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
  async update(updateDto: Partial<IMetamaskUser>) {
    return this.metamaskUserService.update(updateDto);
  }

  get(address: string) {
    return this.metamaskUserService.findByAddress(address);
  }
}
