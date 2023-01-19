import { IsNumber, IsString } from 'class-validator';

class CreateBlogDao {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsNumber()
  userId: number;
}
