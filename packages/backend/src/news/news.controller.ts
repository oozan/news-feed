import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { NewsDTO } from './dto/news.dto';

// Newa controller receives /news requests for the client.
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Version 1')
@Controller()
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  // getAll gets all the news entities
  // with the /news endpoint.xw
  @Get('/')
  @ApiQuery({
    name: 'id',
    required: false,
    type: String,
    description: 'Article IDs.',
  })
  @ApiQuery({
    name: 'id',
    required: false,
    type: String,
    description: 'Article IDs.',
  })
  @ApiQuery({
    name: 'title',
    required: false,
    type: String,
    description: 'Article Titles.',
  })
  @ApiQuery({
    name: 'content',
    required: false,
    type: String,
    description: 'Article Contents.',
  })
  @ApiQuery({
    name: 'news',
    required: false,
    type: String,
    description: 'Article News.',
  })
  @ApiQuery({
    name: 'created_by',
    required: false,
    type: String,
    description: 'Article is created by.',
  })
  @ApiQuery({
    name: 'created_at',
    required: false,
    type: Date,
    description: 'Article is created at.',
  })
  @ApiResponse({
    status: 200,
    description: 'List of news that provide data to the database of this API.',
    type: NewsDTO,
    isArray: true,
  })
  async getAll() {
    try {
      return this.newsService.findAll();
    } catch (e: any) {
      throw new HttpException(
        { error: 'News Not found or user has no access to it' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Post('/') // Define a new POST endpoint
  async createNews(@Body() newsDTO: NewsDTO) {
    return this.newsService.create(newsDTO); // Call the service method to create news
  }
}
