import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000); 
    // Activer CORS
    app.enableCors({
      origin: 'http://localhost:3001/person',// Autoriser uniquement l'URL de ton frontend
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
  console.log('Application is running on: http://localhost:3000');
}
bootstrap();
