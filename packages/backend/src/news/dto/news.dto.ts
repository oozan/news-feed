import { Exclude, Expose } from 'class-transformer';
@Exclude()
export class NewsDTO {
  @Expose()
  id: string;

  @Expose()
  title: string;

  @Expose()
  content: string;

  @Expose()
  news: string;

  @Expose()
  created_by: string;

  @Expose()
  created_at: Date;

  constructor(
    id: string,
    title: string,
    content: string,
    news: string,
    created_by: string,
    created_at: Date,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.news = news;
    this.created_by = created_by;
    this.created_at = created_at;
  }
}
