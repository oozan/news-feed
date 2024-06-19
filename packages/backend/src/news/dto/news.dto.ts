import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class NewsDTO {
  @ApiProperty()
  @Expose()
  id: string;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  content: string;

  @ApiProperty()
  @Expose()
  news: string;

  @ApiProperty()
  @Expose()
  created_by: string;

  @ApiProperty()
  @Expose()
  created_at: string;

  constructor(
    id: string,
    title: string,
    content: string,
    news: string,
    created_by: string,
    created_at: Date, // Change the type to Date
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.news = news;
    this.created_by = created_by;
    this.created_at = created_at.toISOString(); // Convert Date to string
  }
}
