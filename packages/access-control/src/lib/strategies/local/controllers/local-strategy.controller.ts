import { Controller, Post, Request, UseGuards } from '@nestjs/common';

import { LocalAuthGuard } from '../guard/local-auth.guard';
import { LocalStrategyService } from '../services/local-strategy.service';
import { ILocalStrategyControllerOptions } from '../types';
import { IController } from '../../../core/types/nest.interface';

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
    constructor(private LocalStrategyService: LocalStrategyService<K>) {}

    @UseGuards(LocalAuthGuard)
    @Post(props?.loginUrl || defaultStrategyOptions.loginUrl)
    async login(@Request() req: any) {
      return this.LocalStrategyService.login(req.body);
    }
  }

  return LocalStrategyController;
}
