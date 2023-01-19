import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

class GetBlogDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  body: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  comments: {
    id: number;
    comment: string;
  }[];

  @ApiProperty()
  @IsNotEmpty()
  @IsObject()
  author: {
    id: number;
    name: string;
  };
}

export default GetBlogDto;
