import { ApiProperty } from '@nestjs/swagger';

export class NewsCreateDTO {
  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  news: string;

  @ApiProperty()
  created_by: string;

  @ApiProperty()
  created_at: string;
}
