import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';

@Controller('blog')
export class BlogController {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }

    @Get(":id")
    @HttpCode(HttpStatus.OK)
    getBlog(@Param("id") id: string): string {
        return `Blog ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    createBlog(@Body() blog) {
        return blog;
    }
}
