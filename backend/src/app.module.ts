import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { BlogModule } from './blog/blog.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    UserModule,
    BlogModule,
    ProfileModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
