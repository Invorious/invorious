import { Controller, Get, Inject, Req, UseGuards } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "@nestjs/passport";
import { GoogleAccountStrategyService } from "../services/google-account-strategy.service";
import { IGoogleAccountController, IGoogleAccountService } from "../types";

export function buildController(props: IGoogleAccountController): any {
  @Controller(props.routeController!)
  class GoogleAccountStrategyController {
    constructor(
      // @Inject('UsersService') private usersService: IGoogleAccountService,
      private jwtService: JwtService,
      private googleAccountStrategyService: GoogleAccountStrategyService,
    ) { }

    @Get(props.routeInit!)
    @UseGuards(AuthGuard('google'))
    async googleAuth(){
      return { }
    }

    @Get(props.routeCallback!)
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req: any) {
      // this.usersService.findByGoogleId()
      // this.googleAccountStrategyService.validate(res)
      return req.user
      if (!req.user) return 'No user from google'

      return {
        message: 'User Info from Google',
        user: req.user
      }
    }
  }
  return GoogleAccountStrategyController
}