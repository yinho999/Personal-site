import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogRepostory } from './blog.repository';

@Module({
  providers: [BlogService, BlogRepostory],
  controllers: [BlogController],
})
export class BlogModule {}
