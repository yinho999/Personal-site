import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

class UpdateBlogDto {
  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @ApiPropertyOptional()
  @IsString()
  body?: string;
}

export { UpdateBlogDto };
