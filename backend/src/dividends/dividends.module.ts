import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DividendsController } from './dividends.controller';
import { DividendsService } from './dividends.service';
import { Dividend } from './entities/dividend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dividend])],
  controllers: [DividendsController],
  providers: [DividendsService],
  exports: [DividendsService],
})
export class DividendsModule {} 