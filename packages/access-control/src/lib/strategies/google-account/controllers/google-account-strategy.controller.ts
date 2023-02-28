import { Controller, Get, Inject, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { IGoogleAccountBuildController } from "../types";

const configBase: IGoogleAccountBuildController = {
  routeController: 'auth/google/callback',
}

export function buildGoogleAccountController(props: IGoogleAccountBuildController): any {
  @Controller()
  class GoogleAccountStrategyController {
    @Get(props.routeController! ?? configBase.routeController)
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: any) {
      if (!req.user) return 'No user from google'
      return req.user
    }
  }

  return GoogleAccountStrategyController
}