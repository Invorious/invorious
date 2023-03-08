import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IController } from '../../../core/types/nest.interface';
import { IJwtPayload } from '../../../core/types/jwt-payload.interface';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { SignedRequestDto } from '../types/signed-request.dto';
import { IMetamaskStrategyControllerOptions } from '../types/metamask-controller-options';
import { UpdateRequestDto } from '../types/update-request.dto';

export function buildMetamaskStrategyController(
  props: IMetamaskStrategyControllerOptions | undefined,
): IController {
  const options: IMetamaskStrategyControllerOptions = {
    baseUrl: props?.baseUrl ?? 'auth/metamask',
  };
  @Controller(options.baseUrl)
  class MetamaskStrategyController<K extends IJwtPayload> {
    constructor(private metamaskStrategyService: MetamaskStrategyService<K>) {}
    @UseGuards(AuthGuard('jwt'))
    @Get('/me')
    getMetamaskUser(@Request() req: { user: K }) {
      return this.metamaskStrategyService.getProfile(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/me')
    updateMetamaskUser(
      @Request() req: { user: K },
      @Body() updateDto: UpdateRequestDto,
    ) {
      return this.metamaskStrategyService.updateProfile(req.user.id, updateDto);
    }
    @Post('/connect')
    login(@Body() connectDto: SignedRequestDto) {
      return this.metamaskStrategyService.connect(connectDto);
    }
  }
  return MetamaskStrategyController;
}
