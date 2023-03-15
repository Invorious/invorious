import {
  Controller,
  Post,
  Body,
  Inject,
  UseGuards,
  Get,
  Put,
  Request,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { tokenUserService } from '../tokens';
import { IJwtPayload } from '../types/jwt-payload.interface';
import { IController } from '../types/nest-js';
import { IStrategyService } from '../types/strategy-service.interface';

export function buildUserManagementController(): IController {
  @Controller('/auth')
  class UserManagementController<T, K extends IJwtPayload> {
    constructor(
      @Inject(tokenUserService)
      private userService: IStrategyService<T>,
    ) {}
    @Post('/register')
    async registerUser(@Body() user: Partial<T>) {
      console.log('Registering user: ', user);
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

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
      return this.userService.delete(+id);
    }
  }
  return UserManagementController;
}
