import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

class GetUserDao {
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
export { GetUserDao };
