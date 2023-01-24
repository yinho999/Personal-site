import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { BlogRepository } from './blog.repository';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  providers: [BlogService, BlogRepository],
  controllers: [BlogController],
})
export class BlogModule {}
