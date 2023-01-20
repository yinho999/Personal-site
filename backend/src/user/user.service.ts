import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

import * as argon2 from 'argon2';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    // Check if user already exists
    const isExist = await this.userRepository.isExistByEmail(
      createUserDto.email,
    );

    if (isExist) {
      throw new ConflictException('User already exists');
    }
    // hash password using argon
    const hash = await argon2.hash(createUserDto.password);

    // convert to dao
    const user = {
      email: createUserDto.email,
      name: createUserDto.name,
      hash: hash,
    };

    // save user to database
    return await this.userRepository.create(user);
  }

  async login(loginUserDto: LoginUserDto) {
    // find user by email
    const [user, hash] = await this.userRepository.findOneByEmail(
      loginUserDto.email,
    );

    // compare password
    const isMatch = await argon2.verify(hash, loginUserDto.password);

    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Jwt sign user
    return await this.authService.signToken({
      ...user,
      sub: user.id,
    });
  }

  async checkUser(email: string): Promise<boolean> {
    const isExist = await this.userRepository.isExistByEmail(email);
    return isExist;
  }

  async findOne(id: number) {
    return await this.userRepository.findOneById(id);
  }
}
