import { Body, Controller, Post } from '@nestjs/common';
import { IController } from '../../../core/types/nest.interface';
import { IJwtPayload } from '../../../core/types/jwt-payload.interface';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { SignedRequestDto } from '../types/signed-request.dto';
import { IMetamaskStrategyControllerOptions } from '../types/metamask-controller-options';

export function buildMetamaskStrategyController(
  props: IMetamaskStrategyControllerOptions | undefined,
): IController {
  const options: IMetamaskStrategyControllerOptions = {
    baseUrl: props?.baseUrl ?? 'auth/metamask',
  };
  @Controller(options.baseUrl)
  class MetamaskStrategyController<K extends IJwtPayload> {
    constructor(private metamaskStrategyService: MetamaskStrategyService<K>) {}
    @Post('/connect')
    login(@Body() connectDto: SignedRequestDto) {
      return this.metamaskStrategyService.connect(connectDto);
    }
  }
  return MetamaskStrategyController;
}
