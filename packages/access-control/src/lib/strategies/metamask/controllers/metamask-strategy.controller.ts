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
import { NestJsController } from '../../../core/types/nest-js-controller.type';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { LoginDto } from '../types/login-dto';
import { IMetamaskUser } from '../types/metamask-user';
import { IMetamaskStrategyControllerOptions } from '../types/metamsak-controller-options';

export function buildMetamaskStrategyController(
  props: IMetamaskStrategyControllerOptions | undefined,
): NestJsController {
  const options: IMetamaskStrategyControllerOptions = {
    baseUrl: props?.baseUrl ?? 'auth/metamask',
  };
  @Controller(options.baseUrl)
  class MetamaskStrategyController<K extends object> {
    constructor(private metamaskStrategyService: MetamaskStrategyService<K>) {}
    @UseGuards(AuthGuard('jwt'))
    @Get('/me')
    getMetamaskUser(@Request() req: { user: K }) {
      const user = this.metamaskStrategyService.get(req.user.address);
      return user;
    }
    @Post('/login')
    login(@Body() loginDto: LoginDto) {
      return this.metamaskStrategyService.login(loginDto);
    }
    @Put('/me')
    @UseGuards(AuthGuard('jwt'))
    updateMetamaskUser(
      @Body() updateDto: Partial<IMetamaskUser>,
      @Request() req: { user: K },
    ) {
      return this.metamaskStrategyService.update({ ...updateDto, ...req.user });
    }
  }
  return MetamaskStrategyController;
}
