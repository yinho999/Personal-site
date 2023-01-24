import { IsOptional, IsString } from 'class-validator';

class UpdateBlogDbo {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  body?: string;
}

export { UpdateBlogDbo };
