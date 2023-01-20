import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtPayloadDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  async signToken(data: JwtPayloadDto): Promise<{
    accessToken: string;
  }> {
    const accessToken = await this.jwtService.sign(data, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: '15m',
    });
    return { accessToken };
  }

  async validateUser(payload: JwtPayloadDto) {
    return await this.userService.checkUser(payload.email);
  }
}
