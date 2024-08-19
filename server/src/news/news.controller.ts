import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { Request } from 'express';
import { CreateNewsDto } from './dto/create-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async find(
    @Query('limit') limit: number | any,
    @Query('offset') offset: number | any,
  ) {
    if (limit && offset) {
      try {
        limit = parseInt(limit);
        offset = parseInt(offset);
      } catch (err) {
        throw new BadRequestException(
          'Limit and Offset must be valid integers',
        );
      }
      return await this.newsService.find(limit, offset);
    } else {
      return await this.newsService.find();
    }
  }

  @Post()
  async create(@Body() body: CreateNewsDto, @Req() req: Request) {
    const author = req['userId'].toString();

    return (await this.newsService.create(body, author)).populate('author');
  }
}
