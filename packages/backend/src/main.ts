import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

const options: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey, methodKey) =>
    `${controllerKey.replace('Controller', '')}_${methodKey}`,
};

// bootstrap boostraps the application and runs the necessary tasks for the API service.
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    type: VersioningType.URI,
  });

  const config = new DocumentBuilder()
    .setTitle('Edge Reference Solution Data API')
    .setVersion('API version 1.0')
    //.addTag('Process History Data')
    .build();

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3004);
}

bootstrap();
