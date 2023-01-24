import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorators';
import { GetUserDecoratorDto } from 'src/auth/decorators/get-user.dto';
import { JwtGuard } from 'src/auth/guard';
import { BlogService } from './blog.service';
import { UpdateBlogDto } from './dto';
import CreateBlogDto from './dto/create-blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('/')
  getBlogs() {
    return this.blogService.getBlogs();
  }

  @Get('/:id')
  getBlog(@Param('id', ParseIntPipe) id: number) {
    return this.blogService.getBlog(id);
  }

  @Get('/:id/comments')
  getBlogComments(@Param('id', ParseIntPipe) id: number) {
    return 'Blog id:' + id;
  }

  @Post('/')
  @UseGuards(JwtGuard)
  async createBlog(
    @GetUser() user: GetUserDecoratorDto,
    @Body() blog: CreateBlogDto,
  ) {
    if (user) {
      return await this.blogService.createBlog(user, blog);
    }
  }

  @Put('/:id')
  @UseGuards(JwtGuard)
  async updateBlog(
    @GetUser() user: GetUserDecoratorDto,
    @Param('id', ParseIntPipe) id: number,
    @Body() blog: UpdateBlogDto,
  ) {
    return await this.blogService.updateBlog(user, id, blog);
  }

  @Put('/:id/publish')
  publishBlog(@Param('id', ParseIntPipe) id: number) {
    return 'publishBlog id:' + id;
  }

  @Delete('/:id')
  @UseGuards(JwtGuard)
  async deleteBlog(
    @GetUser() user: GetUserDecoratorDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.blogService.deleteBlog(user, id);
  }
}
