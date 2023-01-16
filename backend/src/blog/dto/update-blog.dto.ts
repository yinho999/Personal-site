import { IsString } from 'class-validator';

class UpdateBlogDto {
  @IsString()
  title?: string;

  @IsString()
  content?: string;
}

export default UpdateBlogDto;
