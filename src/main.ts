import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

/** Comma-separated list in CORS_ORIGINS; trims entries and drops empties. Default for local dev when unset. */
function parseCorsOriginsFromEnv(): string[] {
  const raw = process.env.CORS_ORIGINS?.trim();
  const source = raw && raw.length > 0 ? raw : 'http://localhost:5173';
  return source
    .split(',')
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const allowedOrigins = parseCorsOriginsFromEnv();
  new Logger('Bootstrap').log(`CORS allowed origins: ${allowedOrigins.join(', ')}`);

  // Enable CORS (credentials; allowlist from CORS_ORIGINS)
  app.enableCors({
    origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
      if (!origin) {
        return callback(null, true);
      }
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: Origin "${origin}" is not allowed`));
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  await app.listen(process.env.PORT ?? 3000);
  console.log(`🚀 Application is running on: ${await app.getUrl()}`);
}
bootstrap();
