import { IsNumber, IsString } from 'class-validator';

class CreateBlogDbo {
  @IsString()
  title: string;

  @IsString()
  content: string;
}
