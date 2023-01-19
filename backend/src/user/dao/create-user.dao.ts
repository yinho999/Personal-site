import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

class CreateUserDao {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @IsString()
  hash: string;
}

export { CreateUserDao };
