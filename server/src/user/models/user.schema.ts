import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ default: 'default' })
  avatar: string;

  @Prop({ default: false })
  isWriter: boolean;

  @Prop({ default: Date.now })
  register_date: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
