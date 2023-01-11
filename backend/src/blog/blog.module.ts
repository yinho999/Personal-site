import {Module} from '@nestjs/common';
import {PrismaService} from "../prisma.service";
import {BlogController} from "./blog.controller";
import {BlogRepository} from "./blog.repository";

@Module({
    imports: [PrismaService],
    controllers: [BlogController],
    providers: [BlogRepository],
})
export class BlogModule {
}
