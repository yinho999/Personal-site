import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogRepostory {
  constructor(private readonly prisma: PrismaService) {}

  // async createBlog(data:) {
  //   return this.prisma.blog.create({ data });
  // }
}
