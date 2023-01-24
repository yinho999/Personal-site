import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBlogDao, UpdateBlogDao } from './dao';

@Injectable()
export class BlogRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async getBlogs() {
    return this.prisma.blog.findMany();
  }

  public async getBlog(id: number) {
    return this.prisma.blog.findUnique({
      where: {
        id,
      },
    });
  }

  public async createBlog(blog: CreateBlogDao) {
    const { title, body, userId } = blog;
    return this.prisma.blog.create({
      data: {
        title,
        body,
        author: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  public async updateBlog(id: number, blog: UpdateBlogDao) {
    const { title, body } = blog;
    return await this.prisma.blog.update({
      where: {
        id,
      },
      data: {
        title,
        body,
      },
    });
  }

  public async deleteBlog(id: number) {
    return await this.prisma.blog.delete({
      where: {
        id,
      },
    });
  }
}
