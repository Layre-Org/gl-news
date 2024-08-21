import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Req,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findByAuth(@Req() req: Request) {
    const id = req['userId'];

    return await this.userService.findOne(id);
  }

  @Get(':id')
  async getUser(@Param('id') id: string | Types.ObjectId, @Req() req: Request) {
    if (!req['isAdmin']) {
      throw new UnauthorizedException();
    }

    return await this.userService.findOne(id);
  }

  @Get('news/:id')
  async getNews(@Param('id') id: string | Types.ObjectId) {
    return id;
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body);
  }

  @Patch(':id')
  async updateUser(
    @Param('id') id: Types.ObjectId | string,
    @Body() body: UpdateUserDto,
    @Req() req: Request,
  ) {
    const user = this.userService.findOne(id);

    if (!user) {
      throw new BadRequestException(
        "Couldn't find a document with the ID providen",
      );
    }

    const userId: Types.ObjectId = (await user)._id;

    if (!userId) {
      throw new UnauthorizedException(
        "Couldn't verify the author's permission, try again",
      );
    }

    if (
      req['userId'].toString() !== userId.toString() &&
      req['isAdmin'] === false
    ) {
      throw new UnauthorizedException(
        'User must be the user or an admin to delete the document',
      );
    }

    const doc = await this.userService.update(id, body);
    return {
      message: 'Data updated successfully',
      doc,
    };
  } // Fix Email uniqueness updating

  @Delete(':id')
  async deleteUser(
    @Param('id') id: Types.ObjectId | string,
    @Req() req: Request,
  ) {
    const user = this.userService.findOne(id);

    if (!user) {
      throw new BadRequestException(
        "Couldn't find a document with the ID providen",
      );
    }

    const userId: Types.ObjectId = (await user)._id;

    if (!userId) {
      throw new UnauthorizedException(
        "Couldn't verify the author's permission, try again",
      );
    }

    if (
      req['userId'].toString() !== userId.toString() &&
      req['isAdmin'] === false
    ) {
      throw new UnauthorizedException(
        'User must be the user or an admin to delete the document',
      );
    }

    const doc = await this.userService.remove(id);
    return {
      message: 'Data deleted successfully',
      doc,
    };
  }
}
