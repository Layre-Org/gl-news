import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  async getUser(@Param('id') id: string | Types.ObjectId) {
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
  ) {
    return await this.userService.update(id, body);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: Types.ObjectId | string) {
    return await this.userService.remove(id);
  }
}
