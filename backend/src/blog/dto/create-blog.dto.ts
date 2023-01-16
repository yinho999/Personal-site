import { IsString } from 'class-validator';

class CreateBlogDto {
  @IsString()
  title: string;

  @IsString()
  content: string;
}

export default CreateBlogDto;
