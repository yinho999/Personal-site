import { IsString } from 'class-validator';

class CreateBlogDbo {
  @IsString()
  title: string;

  @IsString()
  body: string;
}

export default CreateBlogDbo;
