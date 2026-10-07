import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: process.env.CORS_ORIGIN?.split(',') ?? true,
  });
  app.enableShutdownHooks();
  await app.listen(process.env.PORT ?? 4000, '0.0.0.0');
}
await bootstrap();
