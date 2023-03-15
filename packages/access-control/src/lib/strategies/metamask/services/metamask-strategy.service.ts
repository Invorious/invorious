import { Inject, Injectable } from '@nestjs/common';
import { verifyMessage } from 'ethers';

import { SignedRequestDto } from '../types/signed-request.dto';
import { IMetamaskUserEntity } from '../types/metamask-user';
import { IMetamaskService } from '../types/metamask-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { tokenUserService } from '../../../core/tokens';
import { IJwtPayload } from '../../../core/types/jwt-payload.interface';

@Injectable()
export class MetamaskStrategyService<K extends IJwtPayload> {
  constructor(
    @Inject(tokenUserService)
    private metamaskUserService: IMetamaskService<IMetamaskUserEntity>,
    private coreService: AccessControlCoreService<IMetamaskUserEntity, K>,
  ) {}

  async connect(connectDto: SignedRequestDto) {
    const { signature } = connectDto;
    const recoveredAddress = verifyMessage(
      this.metamaskUserService.loginMessage,
      signature,
    );
    let metamaskUser = await this.metamaskUserService.findByAddress(
      recoveredAddress,
    );
    if (!metamaskUser) {
      metamaskUser = await this.metamaskUserService.register({
        address: recoveredAddress,
      });
    }

    return this.coreService.generateToken(metamaskUser);
  }
}
