import { Injectable } from '@nestjs/common';
import { validate } from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';
import { transformAndValidate } from 'src/utils';
import { GetUserDao } from './dao';
import { CreateUserDao } from './dao/create-user.dao';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(user: CreateUserDao): Promise<void> {
    await this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        hash: user.hash,
      },
    });
  }

  async findOne(id: number): Promise<GetUserDao> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    // convert to dao using class transformer
    const dao = transformAndValidate(user, GetUserDao);
    return dao;
  }
}
