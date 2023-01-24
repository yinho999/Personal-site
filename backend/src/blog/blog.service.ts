import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { GetUserDecoratorDto } from 'src/auth/decorators/get-user.dto';

import { UserService } from 'src/user/user.service';
import { BlogRepository } from './blog.repository';
import CreateBlogDbo from './dbo/create-blog.dbo';
import { UpdateBlogDto } from './dto';

@Injectable()
export class BlogService {
  constructor(
    private blogRepository: BlogRepository,
    private userService: UserService,
  ) {}
  public async getBlogs() {
    return await this.blogRepository.getBlogs();
  }

  public async getBlog(id: number) {
    const blog = await this.blogRepository.getBlog(id);
    if (blog) {
      return blog;
    }
    return new NotFoundException();
  }

  public async createBlog(user: GetUserDecoratorDto, blog: CreateBlogDbo) {
    const isExistUser = await this.userService.checkUser(user.email);
    if (isExistUser) {
      return await this.blogRepository.createBlog({ ...blog, userId: user.id });
    } else {
      return new UnauthorizedException();
    }
  }

  public async updateBlog(
    user: GetUserDecoratorDto,
    id: number,
    updateBlog: UpdateBlogDto,
  ) {
    const blog = await this.blogRepository.getBlog(id);
    if (!blog) {
      return new NotFoundException();
    }

    if (blog.authorId === user.id) {
      return await this.blogRepository.updateBlog(id, updateBlog);
    } else {
      return new UnauthorizedException();
    }
  }

  public async deleteBlog(user: GetUserDecoratorDto, id: number) {
    const blog = await this.blogRepository.getBlog(id);
    if (!blog) {
      return new NotFoundException();
    }
    if (blog.authorId === user.id) {
      return await this.blogRepository.deleteBlog(id);
    } else {
      return new UnauthorizedException();
    }
  }
}
