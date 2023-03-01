import {
  Inject,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { LoginDto } from '../types/login-dto';
import { verifyMessage } from 'ethers';
import { LOGIN_MESSAGE } from '../types/login-message';
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
    private coreService: AccessControlCoreService<IMetamaskUser, K>
  ) {}

  async login(loginDto: LoginDto): Promise<JwtToken> {
    const { signature } = loginDto;
    const recoveredAddress = verifyMessage(LOGIN_MESSAGE, signature);
    let metamaskUser = this.metamaskUserService.findByAddress(recoveredAddress);
    if (!metamaskUser) {
      metamaskUser = await this.metamaskUserService.register({
        address: recoveredAddress,
      });
    }
    return this.coreService.generateToken(metamaskUser);
  }
}
