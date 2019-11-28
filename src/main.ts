import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path';
import * as cookieParser from 'cookie-parser'
import * as session from 'express-session'


async function bootstrap() {
  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // set mvc recipe
  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('ejs')

  // cookie & session
  app.use(cookieParser('cookie-secret', {
    maxAge: 60 * 60 * 24 // 1 day
  }))

  app.use(session({
    // store: '', //默认存在内存中
    secret: 'session-secret',
    resave: true, // 每次都存到store中，多个请求同时发生时候，竞争一个session对象，拥有修改权，其他的请求拿到修改后的
    saveUninitialized: false, // 未初始化时候保存session， 在new后如果没与修改 默认是不保存的
    rolling: true, // 每次访问都设置一个新的sessionid(cookie), 这样时间就会被刷新
    httpOnly: true,
    maxAge: 60 * 60 * 1000 // 1h
  }))

  await app.listen(3000);
}

bootstrap();
