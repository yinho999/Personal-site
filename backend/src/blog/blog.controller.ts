import {
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get('/')
  getBlogs() {
    return ['getBlogs'];
  }

  @Get('/:id')
  getBlog(@Param('id', ParseIntPipe) id: number) {
    return 'Blog id:' + id;
  }

  @Get('/:id/comments')
  getBlogComments(@Param('id', ParseIntPipe) id: number) {
    return 'Blog id:' + id;
  }

  @Post()
  createBlog() {
    return 'createBlog';
  }

  @Put('/:id')
  updateBlog(@Param('id', ParseIntPipe) id: number) {
    return 'updateBlog id:' + id;
  }

  @Put('/:id/publish')
  publishBlog(@Param('id', ParseIntPipe) id: number) {
    return 'publishBlog id:' + id;
  }

  @Delete('/:id')
  deleteBlog(@Param('id', ParseIntPipe) id: number) {
    return 'deleteBlog id:' + id;
  }
}
