import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './swagger/swagger-config';
import 'tsconfig-paths/register';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  
  app.enableCors()
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
