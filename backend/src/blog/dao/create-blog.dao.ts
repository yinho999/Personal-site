import { IsNumber, IsString } from 'class-validator';

class CreateBlogDao {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsNumber()
  userId: number;
}

export { CreateBlogDao };
