import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dividend } from './entities/dividend.entity';

@Injectable()
export class DividendsService {
  constructor(
    @InjectRepository(Dividend)
    private dividendsRepository: Repository<Dividend>,
  ) {}

  async findAll() {
    return this.dividendsRepository.find();
  }
} 