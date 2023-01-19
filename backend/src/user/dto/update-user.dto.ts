import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

class UpdateUserDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsOptional()
  password: string;
}

export { UpdateUserDto };
