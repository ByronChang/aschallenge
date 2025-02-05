import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './swagger/swagger-config';
import 'tsconfig-paths/register';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);  
  await app.listen(3000);
}
bootstrap();
