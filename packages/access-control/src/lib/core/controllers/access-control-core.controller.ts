import { Controller, Post, Body, Inject } from '@nestjs/common';
import { tokenUserService } from '../tokens';
import { IController } from '../types/nest-js';
import { IStrategyService } from '../types/strategy-service.interface';

export function buildAccessControlCoreController(): IController {
  @Controller('/auth')
  class AccessControlCoreController<T> {
    constructor(
      @Inject(tokenUserService)
      private userService: IStrategyService<T>,
    ) {}
    @Post('/register')
    async registerUser(@Body() user: Partial<T>) {
      return this.userService.register(user);
    }
  }
  return AccessControlCoreController;
}
