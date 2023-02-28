import { Controller, Get, Req, UseGuards, Res } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Response, Request } from 'express';

import { IGoogleAccountBuildController } from "../types";
import { IController } from "../../../core/types/nest.interface";

export function buildGoogleAccountController({ routeGoogle, routeToRedirect }: IGoogleAccountBuildController): IController {
  @Controller()
  class GoogleAccountStrategyController {
    @Get(routeGoogle)
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
      return res.redirect(`${routeToRedirect}?token=${req.user}`);
    }
  }

  return GoogleAccountStrategyController
}