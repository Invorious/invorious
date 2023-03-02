import { Inject, Injectable } from '@nestjs/common';
import { LoginDto } from '../types/login-dto';
import { verifyMessage } from 'ethers';
import { IMetamaskUser } from '../types/metamask-user';
import { USER_SERVICE } from '../../../core/providers/user-service';
import { IMetamaskService } from '../types/metamask-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { JwtToken } from '../../../core/types/jwt-token';
@Injectable()
export class MetamaskStrategyService<K extends object> {
  constructor(
    @Inject(USER_SERVICE)
    private metamaskUserService: IMetamaskService<IMetamaskUser>,
    private coreService: AccessControlCoreService<IMetamaskUser, K>,
  ) {}

  login(loginDto: LoginDto): JwtToken {
    const { signature } = loginDto;
    const recoveredAddress = verifyMessage(
      this.metamaskUserService.loginMessage,
      signature,
    );
    const metamaskUser =
      this.metamaskUserService.findByAddress(recoveredAddress);
    if (!metamaskUser) {
      //this.metamaskUserService.register(recoveredAddress);
    }

    return this.coreService.generateToken(metamaskUser);
  }
}
