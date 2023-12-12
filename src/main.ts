import { NestFactory } from '@nestjs/core';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import * as winston from 'winston';
import { logger } from '@quickcart/common/infrastructure/ins/config/logger';
import { AppModule } from './app/infrastructure/ins/config/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger });
  await app.listen(3000);
}
bootstrap();
