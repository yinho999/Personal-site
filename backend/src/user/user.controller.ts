import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtGuard } from 'src/auth/guard/jwt.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @Redirect('/users/login', 302)
  async register(@Body() createUserDto: CreateUserDto) {
    await this.userService.register(createUserDto);
  }
  @Post('/login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return await this.userService.login(loginUserDto);
  }

  @UseGuards(JwtGuard)
  @Get('/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.userService.findOne(id);
  }
}
