import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryColumn } from 'typeorm';

// News entity maps column names to actual newsfeed table in the database.
@Entity('newsfeed')
export class News {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column()
  title: string;

  @ApiProperty()
  @Column()
  content: string;

  @ApiProperty()
  @Column()
  news: string;

  @ApiProperty()
  @Column()
  created_by: string;

  @ApiProperty()
  @Column()
  created_at: Date;

  constructor(partial: Partial<News>) {
    Object.assign(this, partial);
  }
}
