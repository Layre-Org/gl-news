import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/user/models/user.schema';
export type NewsDocument = HydratedDocument<News>;
export declare class News {
    author: User;
    title: string;
    subtitle: string;
    content: string;
    image: string;
    create_date: Date;
    last_edited: Date;
}
export declare const NewsSchema: import("mongoose").Schema<News, import("mongoose").Model<News, any, any, any, import("mongoose").Document<unknown, any, News> & News & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, News, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<News>> & import("mongoose").FlatRecord<News> & {
    _id: Types.ObjectId;
}>;
