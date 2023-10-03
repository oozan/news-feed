import { Entity, Column, PrimaryColumn } from 'typeorm';

// News entity maps column names to actual newsfeed table in the database.
@Entity('newsfeed')
export class News {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  news: string;

  @Column()
  created_by: string;

  @Column()
  created_at: Date;

  constructor(partial: Partial<News>) {
    Object.assign(this, partial);
  }
}
