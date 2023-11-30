import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { RouterModule } from '@nestjs/core';
import { routes } from './routes';
import { NewsModule } from './news/news.module';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<TypeOrmModuleOptions> => {
        const defaultOptions =
          (await getConnectionOptions()) as PostgresConnectionOptions;

        return {
          type: 'postgres',
          host: process.env.DB_HOST || defaultOptions.host,
          port: parseInt(process.env.DB_PORT, 10) || defaultOptions.port,
          username: process.env.DB_USER || defaultOptions.username,
          password: process.env.DB_PASSWORD || defaultOptions.password,
          database: process.env.DB_NAME || defaultOptions.database,
          autoLoadEntities: true,
        };
      },
    }),
    RouterModule.register(routes), // Setup the routes
    NewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
