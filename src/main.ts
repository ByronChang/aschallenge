import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './swagger/swagger-config';
import { join } from 'path';
import 'tsconfig-paths/register';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupSwagger(app);
  app.enableCors()
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
