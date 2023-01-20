import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

class JwtPayloadDto {
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  sub: number;
  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;
  @IsEmail()
  @IsNotEmpty()
  @Expose()
  email: string;
}

export { JwtPayloadDto };
