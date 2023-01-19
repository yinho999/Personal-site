import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
export { CreateUserDto };
