import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from 'src/user/models/user.schema';

export type NewsDocument = HydratedDocument<News>;

@Schema()
export class News {
  @Prop({ required: true, ref: 'User' })
  author: User;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  subtitle: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  create_date: Date;

  @Prop({ required: true })
  last_edited: Date;
}
