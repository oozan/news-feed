import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import convertEntitiesToDTOs from 'src/utiliy/type.converters';
import { NewsDTO } from './dto/news.dto';

// Newa controller receives /news requests for the client.
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Version 1')
@Controller({ version: '1' })
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  // getAll gets all the news entities
  // with the /news endpoint.xw
  @Get('/')
  @ApiResponse({
    status: 200,
    description: 'List of news that provide data to the database of this API.',
  })
  async getAll() {
    const newsEntities = await this.newsService.findAll();
    return convertEntitiesToDTOs(newsEntities, NewsDTO);
  }
}
