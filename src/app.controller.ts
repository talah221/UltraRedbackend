import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('root-files')
  async getRootFiles(): Promise<any> {
    const files = await this.appService.getRootFiles();
    return files;
  }
}
