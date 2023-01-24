import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    // sign a JWT token
    JwtModule.register({}),
    forwardRef(() => UserModule),
  ],
  exports: [AuthService],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
