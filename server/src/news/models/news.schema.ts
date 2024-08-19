import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from 'src/user/models/user.schema';

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News {
  @Prop({ type: Types.ObjectId, ref: 'User', unique: false })
  author: User;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: 'none' })
  image: string;

  @Prop({ default: Date.now() })
  create_date: Date;

  @Prop({ default: Date.now() })
  last_edited: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
