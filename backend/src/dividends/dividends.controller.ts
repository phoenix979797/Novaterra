import { Controller, Get } from '@nestjs/common';
import { DividendsService } from './dividends.service';

@Controller('dividends')
export class DividendsController {
  constructor(private readonly dividendsService: DividendsService) {}

  @Get()
  findAll() {
    return this.dividendsService.findAll();
  }
} 