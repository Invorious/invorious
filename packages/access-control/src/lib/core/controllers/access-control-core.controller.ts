import {
  Controller,
  Post,
  Body,
  Inject,
  UseGuards,
  Get,
  Put,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { tokenUserService } from '../tokens';
import { IJwtPayload } from '../types/jwt-payload.interface';
import { IController } from '../types/nest-js';
import { IStrategyService } from '../types/strategy-service.interface';

export function buildAccessControlCoreController(): IController {
  @Controller('/auth')
  class AccessControlCoreController<T, K extends IJwtPayload> {
    constructor(
      @Inject(tokenUserService)
      private userService: IStrategyService<T>,
    ) {}
    @Post('/register')
    async registerUser(@Body() user: Partial<T>) {
      return this.userService.register(user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('/me')
    async getUser(@Request() req: { user: K }) {
      return this.userService.findById(req.user.id);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put('/me')
    async updateUser(@Request() req: { user: K }, @Body() user: Partial<T>) {
      return this.userService.update(req.user.id, user);
    }
  }
  return AccessControlCoreController;
}