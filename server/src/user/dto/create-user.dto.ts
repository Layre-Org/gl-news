import { IsEmail, IsOptional, IsString, IsUrl, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3)
  username: string;

  @IsString()
  @Length(8)
  password: string;

  @IsUrl()
  @IsOptional()
  avatar: string;

  @IsEmail()
  email: string;
}
