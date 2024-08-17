import { HydratedDocument } from 'mongoose';
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
