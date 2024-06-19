import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('newsfeed')
export class News {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  news: string;

  @Column()
  created_by: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  constructor(partial: Partial<News>) {
    Object.assign(this, partial);
  }
}
