import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { Injectable } from '@nestjs/common';

// NewsService consists of the usual service method implementations news.
// The services handle the requested data which can be reused accross the application.
@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  // finAll finds all the news in the database.
  async findAll() {
    return await this.newsRepository.find();
  }
}
