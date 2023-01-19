import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class CreateBlogDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;
}

export default CreateBlogDto;
