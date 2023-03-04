import { Inject, Injectable } from '@nestjs/common';
import { verifyMessage } from 'ethers';

import { LoginDto } from '../types/login-dto';
import { IMetamaskUser } from '../types/metamask-user';
import { IMetamaskService } from '../types/metamask-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { tokenUserService } from '../../../core/tokens';
import { IJwtToken } from '../../../core/types/jwt.interface';

@Injectable()
export class MetamaskStrategyService<K extends object> {
  constructor(
    @Inject(tokenUserService)
    private metamaskUserService: IMetamaskService<IMetamaskUser>,
    private coreService: AccessControlCoreService<IMetamaskUser, K>,
  ) {}

  login(loginDto: LoginDto): IJwtToken {
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
