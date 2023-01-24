import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

type NewType = string;

class GetBlogDbo {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  title: NewType;

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
export { GetBlogDbo };
