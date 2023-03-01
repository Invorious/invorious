import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NestJsController } from '../../../core/types/nestjs-controller-type';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { LoginDto } from '../types/login-dto';
import { IMetamaskStrategyControllerOptions } from '../types/metamsak-controller-options';

export function buildMetamaskStrategyController(
  props: IMetamaskStrategyControllerOptions | undefined
): NestJsController {
  const defaultStrategyOptions: IMetamaskStrategyControllerOptions = {
    baseUrl: 'auth/metamask',
    loginUrl: '/login',
    profileUrl: '/me',
  };
  @Controller(props?.baseUrl || defaultStrategyOptions.baseUrl)
  class MetamaskStrategyController<K extends object> {
    constructor(private metamaskStrategyService: MetamaskStrategyService<K>) {}
    // This get endpoint is for testing purposes, like:
    // 1 → check jwt is validated from metamaskStrategyService.validate()
    // 2 → checl if payload is managed correctly
    @UseGuards(AuthGuard('jwt'))
    @Get(props?.profileUrl || defaultStrategyOptions.profileUrl)
    getMetamaskUser(@Request() req: { user: K }) {
      return req.user;
    }
    @Post(props?.loginUrl || defaultStrategyOptions.loginUrl)
    login(@Body() loginDto: LoginDto) {
      return this.metamaskStrategyService.login(loginDto);
    }
  }
  return MetamaskStrategyController;
}
