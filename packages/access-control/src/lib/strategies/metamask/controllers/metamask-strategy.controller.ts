import { Body, Controller, Post } from '@nestjs/common';
import { MetamaskStrategyService } from '../services/metamask-strategy.service';
import { LoginDto } from '../types/login-dto';

@Controller('metamask')
export class MetamaskStrategyController {
  constructor(private metamaskStrategyService: MetamaskStrategyService) {}
  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.metamaskStrategyService.login(loginDto);
  }
}
