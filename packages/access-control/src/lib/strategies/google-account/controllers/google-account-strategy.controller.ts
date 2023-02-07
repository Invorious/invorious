import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GoogleAccountStrategyModuleConfig } from "../types/google-account-strategy-module-config";

export function buildController(
  props: GoogleAccountStrategyModuleConfig
): any {
  @Controller(props.routeController!)
  class GoogleAccountStrategyController {
    @Get(props.routeInit!)
    @UseGuards(AuthGuard('google'))
    async googleAuth(){
      return { }
    }

    @Get(props.routeCallback!)
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: any) {
      if (!req.user) return 'No user from google'
      
      return {
        message: 'User Info from Google',
        user: req.user
      }
    }
  }
  return GoogleAccountStrategyController
}