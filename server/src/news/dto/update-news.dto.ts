import { PartialType, PickType } from '@nestjs/swagger';
import { CreateNewsDto } from './create-news.dto';

export class UpdateNewsDto extends PartialType(
  PickType(CreateNewsDto, ['title', 'subtitle', 'content', 'image'] as const),
) {}
