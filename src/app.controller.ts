import { Controller, Get } from '@nestjs/common';
import { AppService, type IInfo } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): { message: string } {
    return this.appService.getHealth();
  }

  @Get('/info')
  getInfo(): IInfo {
    return this.appService.getInfo();
  }
}
