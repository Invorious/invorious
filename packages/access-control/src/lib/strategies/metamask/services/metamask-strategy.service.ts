import { Inject, Injectable } from '@nestjs/common';
import { verifyMessage } from 'ethers';

import { SignedRequestDto } from '../types/signed-request.dto';
import { IMetamaskUser } from '../types/metamask-user';
import { IMetamaskService } from '../types/metamask-service';
import { AccessControlCoreService } from '../../../core/services/access-control-core.service';
import { tokenUserService } from '../../../core/tokens';
import { IJwtToken } from '../../../core/types/jwt.interface';
import { IJwtPayload } from '../../../core/types/jwt-payload.interface';
import { UpdateRequestDto } from '../types/update-request.dto';

@Injectable()
export class MetamaskStrategyService<K extends IJwtPayload> {
  constructor(
    @Inject(tokenUserService)
    private metamaskUserService: IMetamaskService<IMetamaskUser>,
    private coreService: AccessControlCoreService<IMetamaskUser, K>,
  ) {}

  connect(connectDto: SignedRequestDto): IJwtToken {
    const { signature } = connectDto;
    const recoveredAddress = verifyMessage(
      this.metamaskUserService.loginMessage,
      signature,
    );
    let metamaskUser = this.metamaskUserService.findByAddress(recoveredAddress);
    if (!metamaskUser) {
      metamaskUser = this.metamaskUserService.register({
        address: recoveredAddress,
      });
    }

    return this.coreService.generateToken(metamaskUser);
  }

  getProfile(user: K) {
    return this.metamaskUserService.findById(user.id);
  }

  updateProfile(id: number, updateDto: UpdateRequestDto) {
    const { signature } = updateDto;
    const user = this.metamaskUserService.findById(id);
    const recoveredAddress = verifyMessage(
      this.metamaskUserService.updateMessage,
      signature,
    );
    if (user.address == recoveredAddress) {
      return this.metamaskUserService.update(id, updateDto);
    }
    return;
  }
}
