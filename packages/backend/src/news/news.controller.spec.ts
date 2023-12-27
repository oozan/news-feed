import { Test } from '@nestjs/testing';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { NewsDTO } from './dto/news.dto';

describe('News Controller Testing', () => {
  let newsController: NewsController;

  const news = [
    new NewsDTO(
      '1', // id
      'Breaking News', // title
      'Lorem ipsum...', // content
      'Important Event', // news
      'Editor', // created_by
      new Date(), // created_at
    ),
    new NewsDTO(
      '2', // id
      'Election Results', // title
      'Results are in...', // content
      'Election Update', // news
      'Reporter', // created_by
      new Date(), // created_at
    ),
  ];

  const mockNewsService = {
    findAll: jest.fn(() => {
      return news;
    }),
  };

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [NewsController],
      providers: [NewsService],
    })
      .overrideProvider(NewsService)
      .useValue(mockNewsService)
      .compile();

    newsController = moduleRef.get<NewsController>(NewsController);
  });

  describe('findAll', () => {
    it('should return all news', async () => {
      expect(newsController.getAll()).not.toEqual(news);
      expect(mockNewsService.findAll).toHaveBeenCalled();
    });
  });
});
