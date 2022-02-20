import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import getLogLevels from './utility/getLogLevels';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    logger:getLogLevels(false)
  });
  // create documentation swagger
  const configSwagger = new DocumentBuilder()
    .addBearerAuth()
    .setTitle(process.env.DOC_TITLE)
    .setDescription(process.env.DOC_DESCRIPTION)
    .setVersion(process.env.DOC_VERSION)
    .addTag(process.env.DOC_TAG)
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());

  //use global pipe
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  
  app.enableCors();
  

  await app.listen(process.env.PORT_APP, async () =>
    console.log(
      `application start on port ${
        process.env.PORT_APP
      } on url ${await app.getUrl()}`,
    ),
  );
}
bootstrap();
