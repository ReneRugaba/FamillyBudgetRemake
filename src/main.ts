import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // create documentation swagger
  const configSwagger = new DocumentBuilder()
    .setTitle(process.env.DOC_TITLE)
    .setDescription(process.env.DOC_DESCRIPTION)
    .setVersion(process.env.DOC_VERSION)
    .addTag(process.env.DOC_TAG)
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);
  //use global pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(process.env.PORT_APP, async () =>
    console.log(
      `application start on port ${
        process.env.PORT_APP
      } on url ${await app.getUrl()}`,
    ),
  );
}
bootstrap();
