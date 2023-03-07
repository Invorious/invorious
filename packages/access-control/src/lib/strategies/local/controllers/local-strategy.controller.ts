import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';

import { LocalAuthGuard } from '../guards/local-auth.guard';
import { LocalStrategyService } from '../services/local-strategy.service';
import { ILocalStrategyControllerOptions } from '../types';
import { IUsernameAndPassword } from '../types/username-and-password.interface';
import { IController } from '../../../core/types/nest.interface';
import { IJwtPayload } from '../../../core/types/jwt.interface';

export function buildLocalStrategyController(
  props: ILocalStrategyControllerOptions | undefined,
): IController {
  const defaultStrategyOptions: ILocalStrategyControllerOptions = {
    baseUrl: props?.baseUrl || 'auth/local',
    loginUrl: props?.loginUrl || '/login',
    profileUrl: '/me',
  };

  @Controller(defaultStrategyOptions.baseUrl)
  class LocalStrategyController<K extends IJwtPayload> {
    constructor(private localStrategyService: LocalStrategyService<K>) {}

    @UseGuards(LocalAuthGuard)
    @Post(defaultStrategyOptions.loginUrl)
    async login(@Body() credentials: IUsernameAndPassword) {
      return this.localStrategyService.login(credentials);
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
      return this.localStrategyService.delete(Number(id));
    }
  }

  return LocalStrategyController;
}
