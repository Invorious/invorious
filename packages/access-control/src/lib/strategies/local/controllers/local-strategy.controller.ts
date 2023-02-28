import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from '../guard/local-auth.guard';
import { LocalStrategyService } from '../services/local-strategy.service';

@Controller()
export class LocalStrategyController<K> {
  constructor(private localStrategyService: LocalStrategyService<K>) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req: any) {
    return this.localStrategyService.login(req.body);
  }
}
