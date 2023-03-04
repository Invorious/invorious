import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { IController } from '../../../core/types/nest.interface';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { LoginDto } from '../types/login-dto';
import { IMetamaskStrategyControllerOptions } from '../types/metamask-controller-options';

export function buildMetamaskStrategyController(
  props: IMetamaskStrategyControllerOptions | undefined,
): IController {
  const options: IMetamaskStrategyControllerOptions = {
    baseUrl: props?.baseUrl ?? 'auth/metamask',
  };
  @Controller(options.baseUrl)
  class MetamaskStrategyController<K extends object> {
    constructor(private metamaskStrategyService: MetamaskStrategyService<K>) {}
    @UseGuards(AuthGuard('jwt'))
    @Get('/me')
    getMetamaskUser(@Request() req: { user: K }) {
      return req.user;
    }
    @Post('/login')
    login(@Body() loginDto: LoginDto) {
      return this.metamaskStrategyService.login(loginDto);
    }
  }
  return MetamaskStrategyController;
}
