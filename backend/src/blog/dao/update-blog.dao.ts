import { IsOptional, IsString } from 'class-validator';

class UpdateBlogDao {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  body?: string;
}

export { UpdateBlogDao };
