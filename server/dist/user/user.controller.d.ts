import { UserService } from './user.service';
import { Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(id: string | Types.ObjectId): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").User> & import("./models/user.schema").User & {
        _id: Types.ObjectId;
    }>;
    getNews(id: string | Types.ObjectId): Promise<string | Types.ObjectId>;
    createUser(body: CreateUserDto): Promise<{
        password: string;
    }>;
    updateUser(id: Types.ObjectId | string, body: UpdateUserDto): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").User> & import("./models/user.schema").User & {
        _id: Types.ObjectId;
    }>;
    deleteUser(id: Types.ObjectId | string): Promise<import("mongoose").Document<unknown, {}, import("./models/user.schema").User> & import("./models/user.schema").User & {
        _id: Types.ObjectId;
    }>;
}
