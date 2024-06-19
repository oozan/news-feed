import { Routes } from '@nestjs/core';
import { NewsModule } from './news/news.module';

export const routes: Routes = [
  {
    path: '/news',
    module: NewsModule,
  },
];
