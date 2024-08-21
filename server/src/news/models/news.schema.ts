<<<<<<< HEAD
import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
=======
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
>>>>>>> back
import { User } from 'src/user/models/user.schema';

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News {
<<<<<<< HEAD
  @Prop({ required: true, ref: 'User' })
=======
  @Prop({ type: Types.ObjectId, ref: 'User', unique: false })
>>>>>>> back
  author: User;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  content: string;

<<<<<<< HEAD
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  create_date: Date;

  @Prop({ required: true })
  last_edited: Date;
}
=======
  @Prop({ default: 'none' })
  image: string;

  @Prop({ default: Date.now() })
  create_date: Date;

  @Prop({ default: Date.now() })
  last_edited: Date;
}

export const NewsSchema = SchemaFactory.createForClass(News);
>>>>>>> back
