import { News } from './models/news.schema';
import { Model, Types } from 'mongoose';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsService {
    private readonly newsModel;
    constructor(newsModel: Model<News>);
    find(limit?: number, offset?: number): import("mongoose").Query<(import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, {}, News, "find", {}>;
    findOne(_id: Types.ObjectId): import("mongoose").Query<import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, {}, News, "findOne", {}>;
    create(body: CreateNewsDto, author: any): Promise<import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }>;
    update(_id: Types.ObjectId, data: UpdateNewsDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, {}, News, "findOneAndUpdate", {}>;
    remove(_id: Types.ObjectId): import("mongoose").Query<import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, News> & News & {
        _id: Types.ObjectId;
    }, {}, News, "findOneAndDelete", {}>;
}
