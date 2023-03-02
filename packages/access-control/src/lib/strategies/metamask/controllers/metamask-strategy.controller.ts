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
import { DeepPartial } from 'typeorm';
import { NestJsController } from '../../../core/types/nestjs-controller-type';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { LoginDto } from '../types/login-dto';
import { MetamaskJwtPayload } from '../types/metamask-jwt-payload';
import { IMetamaskUser } from '../types/metamask-user';
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
  class MetamaskStrategyController<K extends MetamaskJwtPayload> {
    constructor(private metamaskStrategyService: MetamaskStrategyService<K>) {}
    @UseGuards(AuthGuard('jwt'))
    @Get(props?.profileUrl || defaultStrategyOptions.profileUrl)
    getMetamaskUser(@Request() req: { user: K }) {
      const user = this.metamaskStrategyService.get(req.user.address);
      return user;
    }
    @Post(props?.loginUrl || defaultStrategyOptions.loginUrl)
    login(@Body() loginDto: LoginDto) {
      return this.metamaskStrategyService.login(loginDto);
    }
    @Put(props?.profileUrl || defaultStrategyOptions.profileUrl)
    @UseGuards(AuthGuard('jwt'))
    updateMetamaskUser(
      @Body() updateDto: DeepPartial<IMetamaskUser>,
      @Request() req: { user: K }
    ) {
      return this.metamaskStrategyService.update({ ...updateDto, ...req.user });
    }
  }
  return MetamaskStrategyController;
}
