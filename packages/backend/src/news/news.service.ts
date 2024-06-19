import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { News } from './news.entity';
import { Injectable } from '@nestjs/common';
import { NewsCreateDTO } from './dto/create-news.dto';

// NewsService consists of the usual service method implementations news.
// The services handle the requested data which can be reused accross the application.
@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private newsRepository: Repository<News>,
  ) {}

  async create(newsDTO: NewsCreateDTO): Promise<News> {
    const news = this.newsRepository.create(newsDTO);
    return await this.newsRepository.save(news);
  }

  // finAll finds all the news in the database.
  async findAll() {
    return await this.newsRepository.find();
  }
}
