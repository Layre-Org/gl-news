import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { Request } from 'express';
import { CreateNewsDto } from './dto/create-news.dto';
import { Types } from 'mongoose';
import { UpdateNewsDto } from './dto/update-news.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async find(
    @Query('limit') limit: number | any,
    @Query('offset') offset: number | any,
  ) {
    try {
      if (limit) {
        limit = parseInt(limit);
      }
      if (offset) {
        offset = parseInt(offset);
      }
    } catch (err) {
      throw new BadRequestException('Limit and Offset must be valid integers');
    }

    return await this.newsService.find(limit, offset);
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId) {
    return this.newsService.findOne(id);
  }

  @Post()
  async create(@Body() body: CreateNewsDto, @Req() req: Request) {
    if (!req['isWriter']) {
      throw new UnauthorizedException('User must be a writer to post news');
    }

    const author = req['userId'].toString();

    return (await this.newsService.create(body, author)).populate('author');
  }

  @Patch(':id')
  async update(
    @Body() body: UpdateNewsDto,
    @Param('id') id: Types.ObjectId,
    @Req() req: Request,
  ) {
    const newsAuthor = this.newsService.findOne(id);

    if (!newsAuthor) {
      throw new BadRequestException(
        "Couldn't find a document with the ID providen",
      );
    }

    const newsAuthorId: Types.ObjectId = (await newsAuthor).author['_id'];

    if (!newsAuthorId) {
      throw new UnauthorizedException(
        "Couldn't verify the author's permission, try again",
      );
    }

    if (
      req['userId'].toString() !== newsAuthorId.toString() &&
      req['isAdmin'] === false
    ) {
      throw new UnauthorizedException(
        'User must be the post author or admin to update the document',
      );
    }

    const doc = await this.newsService.update(id, body);
    return {
      message: 'Data updated successfully',
      doc,
    };
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId, @Req() req: Request) {
    const newsAuthor = this.newsService.findOne(id);

    if (!newsAuthor) {
      throw new BadRequestException(
        "Couldn't find a document with the ID providen",
      );
    }

    const newsAuthorId: Types.ObjectId = (await newsAuthor).author['_id'];

    if (!newsAuthorId) {
      throw new UnauthorizedException(
        "Couldn't verify the author's permission, try again",
      );
    }

    if (
      req['userId'].toString() !== newsAuthorId.toString() &&
      req['isAdmin'] === false
    ) {
      throw new UnauthorizedException(
        'User must be the post author or admin to delete the document',
      );
    }

    const doc = await this.newsService.remove(id);
    return {
      message: 'Data deleted successfully',
      doc,
    };
  }
}
