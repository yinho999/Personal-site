import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './user.repository';

import * as argon2 from 'argon2';
import { GetUserDao } from './dao';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
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

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }
}
