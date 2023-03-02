import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from '../guard/local-auth.guard';
import { LocalStrategyService } from '../services/local-strategy.service';
import { ILocalStrategyControllerOptions } from '../types';
import { IController } from '../../../core/types/nest.interface';
import { IUserAndPass } from '../types/user-and-pass.interface';

export function buildLocalStrategyController(
  props: ILocalStrategyControllerOptions | undefined,
): IController {
  const defaultStrategyOptions: ILocalStrategyControllerOptions = {
    baseUrl: 'auth/local',
    loginUrl: '/login',
    profileUrl: '/me',
  };

  @Controller(props?.baseUrl || defaultStrategyOptions.baseUrl)
  class LocalStrategyController<K extends object> {
    constructor(
      private LocalStrategyService: LocalStrategyService<K>, // private authUsersService: AuthUsersService,
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post(props?.loginUrl || defaultStrategyOptions.loginUrl)
    async login(@Body() credentials: IUserAndPass) {
      return this.LocalStrategyService.login(credentials);
    }

    @Delete('delete')
    async delete(@Body() id: number) {
      return this.LocalStrategyService.delete(id);
    }
  }

  return LocalStrategyController;
}
