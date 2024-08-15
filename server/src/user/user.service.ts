import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './models/user.schema';
import { Types, Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  findOne(_id: Types.ObjectId | string) {
    return this.userModel.findOne({ _id });
  }

  async create(body: CreateUserDto) {
    try {
      const user: { password: string } = (
        await this.userModel.create(body)
      ).toObject();
      delete user['password'];
      return user;
    } catch (err) {
      console.log(err);
      switch (err.code) {
        case 11000:
          throw new HttpException(
            'This email already exists.',
            HttpStatus.BAD_REQUEST,
          );
          break;

        default:
          throw new InternalServerErrorException(err.message);
          break;
      }
    }
  }

  update(_id: Types.ObjectId | string, body: any) {
    return this.userModel.findOneAndUpdate({ _id }, body);
  }

  remove(_id: Types.ObjectId | string) {
    return this.userModel.findOneAndDelete({ _id });
  }
}
