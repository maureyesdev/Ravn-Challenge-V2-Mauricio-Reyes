import { NestFactory } from '@nestjs/core';
import { graphqlUploadExpress } from 'graphql-upload-ts';
import { logger } from '@quickcart/common/infrastructure/ins/config/logger';
import { AppModule } from './app/infrastructure/ins/config/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });
  app.use(graphqlUploadExpress());
  await app.listen(3000);
}
bootstrap();
