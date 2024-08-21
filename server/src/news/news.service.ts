import { Injectable } from '@nestjs/common';
import { News } from './models/news.schema';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(
    @InjectModel(News.name) private readonly newsModel: Model<News>,
  ) {}

  find(limit?: number, offset?: number) {
    return this.newsModel
      .find()
      .sort({ _id: -1 })
      .skip(offset)
      .limit(limit)
      .populate('author');
  }

  findOne(_id: Types.ObjectId) {
    return this.newsModel.findOne({ _id }).populate('author');
  }

  create(body: CreateNewsDto, author: any) {
    body['author'] = author;

    return this.newsModel.create(body);
  }

  update(_id: Types.ObjectId, data: UpdateNewsDto) {
    return this.newsModel.findOneAndUpdate({ _id }, data).populate('author');
  }

  remove(_id: Types.ObjectId) {
    return this.newsModel.findOneAndDelete({ _id }).populate('author');
  }
}
