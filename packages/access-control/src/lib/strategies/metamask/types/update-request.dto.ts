import { IMetamaskUser } from './metamask-user';
import { SignedRequestDto } from './signed-request.dto';

export interface UpdateRequestDto
  extends SignedRequestDto,
    Partial<IMetamaskUser> {}
