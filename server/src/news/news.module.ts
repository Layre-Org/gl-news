import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { NewsController } from './news.controller';
import { NewsService } from './news.service';
import { News, NewsSchema } from './models/news.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { IdMiddleware } from 'src/middlewares/id.middleware';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: News.name, schema: NewsSchema }]),
    UserModule,
  ],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(IdMiddleware).forRoutes('news/:id');
    consumer.apply(AuthMiddleware).forRoutes('news', 'news/:id');
  }
}
