import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response, Request } from 'express';

import { IGoogleAccountBuildController } from '../types';
import { IController } from '../../../core/types/nest-js';
import { IJwtToken } from '../../../core/types/jwt.interface';

export function buildGoogleController({
  routeGoogle,
  routeToRedirect,
}: IGoogleAccountBuildController): IController {
  @Controller()
  class GoogleStrategyController {
    @UseGuards(AuthGuard('google'))
    @Get(routeGoogle)
    async googleAuth() {
      return { msg: 'Redirect to authentication with Google' };
    }

    @UseGuards(AuthGuard('google'))
    @Get('google/callback')
    googleCallback(@Req() req: Request, @Res() res: Response) {
      const token = req.user as IJwtToken;
      return res.redirect(`${routeToRedirect}?token=${token.accessToken}`);
    }
  }

  return GoogleStrategyController;
}
