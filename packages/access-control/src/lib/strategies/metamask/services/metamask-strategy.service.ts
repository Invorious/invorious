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

  login(loginDto: LoginDto): JwtToken {
    const { signature } = loginDto;
    const recoveredAddress = verifyMessage(LOGIN_MESSAGE, signature);
    const metamaskUser =
      this.metamaskUserService.findByAddress(recoveredAddress);
    if (!metamaskUser) {
      throw new UnprocessableEntityException(
        'Address is not registered as an active user, please follow registration steps'
      );
    }

    return this.coreService.generateToken(metamaskUser);
  }
}
