import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { setupSwagger } from './swagger/swagger-config';
import 'tsconfig-paths/register';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  setupSwagger(app);
  app.enableCors()

  app.use('/', (req: { path: string; }, res: { redirect: (arg0: string) => any; }, next: () => void) => {
    if (req.path === '/') {
      return res.redirect('/docs');
    }
    next();
  });
  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
