import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service'
import {HomeModule} from './home/home.module';
import {BlogController} from './blog/blog.controller';
import {PrismaService} from './prisma.service';
import {BlogModule} from './blog/blog.module';

@Module({
    imports: [HomeModule, BlogModule],
    exports: [PrismaService],
    controllers: [AppController, BlogController],
    providers: [AppService,],
})
export class AppModule {
}
