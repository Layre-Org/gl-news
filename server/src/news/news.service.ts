import { Injectable } from '@nestjs/common';
import { News } from './models/news.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNewsDto } from './dto/create-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<News>,
  ) {}

  find(limit?: number, offset?: number) {
    if (limit && offset) {
      return this.newsModel
        .find()
        .sort({ _id: -1 })
        .skip(offset)
        .limit(limit)
        .populate('users');
    } else {
      return this.newsModel.find().sort({ _id: -1 }).populate('users');
    }
  }

  create(body: CreateNewsDto, author: any) {
    body['author'] = author;

    return this.newsModel.create(body);
  }
}
