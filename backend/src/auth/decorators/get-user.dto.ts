import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class GetUserDecoratorDto {
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  id: number;

  @IsString()
  @IsNotEmpty()
  @Expose()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Expose()
  name: string;
}
export { GetUserDecoratorDto };
