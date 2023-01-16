import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

class GetBlogDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsArray()
  comments: {
    id: number;
    comment: string;
  }[];

  @IsNotEmpty()
  @IsObject()
  author: {
    id: number;
    name: string;
  };
}

export default GetBlogDto;
