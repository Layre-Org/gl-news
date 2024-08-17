import { User } from './models/user.schema';
import { Types, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findOne(_id: Types.ObjectId | string): import("mongoose").Query<import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, {}, User, "findOne", {}>;
    findForAuth(email: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, {}, User, "findOne", {}>;
    create(body: CreateUserDto): Promise<{
        password: string;
    }>;
    update(_id: Types.ObjectId | string, body: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, {}, User, "findOneAndUpdate", {}>;
    remove(_id: Types.ObjectId | string): import("mongoose").Query<import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, {}, User, "findOneAndDelete", {}>;
}
