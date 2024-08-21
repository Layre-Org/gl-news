import { NewsService } from './news.service';
import { Request } from 'express';
import { CreateNewsDto } from './dto/create-news.dto';
import { Types } from 'mongoose';
import { UpdateNewsDto } from './dto/update-news.dto';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    find(limit: number | any, offset: number | any): Promise<(import("mongoose").Document<unknown, {}, import("./models/news.schema").News> & import("./models/news.schema").News & {
        _id: Types.ObjectId;
    })[]>;
    findOne(id: Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./models/news.schema").News> & import("./models/news.schema").News & {
        _id: Types.ObjectId;
    }>;
    create(body: CreateNewsDto, req: Request): Promise<Omit<import("mongoose").Document<unknown, {}, import("./models/news.schema").News> & import("./models/news.schema").News & {
        _id: Types.ObjectId;
    }, never>>;
    update(body: UpdateNewsDto, id: Types.ObjectId, req: Request): Promise<{
        message: string;
        doc: import("mongoose").Document<unknown, {}, import("./models/news.schema").News> & import("./models/news.schema").News & {
            _id: Types.ObjectId;
        };
    }>;
    remove(id: Types.ObjectId, req: Request): Promise<{
        message: string;
        doc: import("mongoose").Document<unknown, {}, import("./models/news.schema").News> & import("./models/news.schema").News & {
            _id: Types.ObjectId;
        };
    }>;
}
