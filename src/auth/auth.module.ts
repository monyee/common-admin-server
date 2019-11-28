import { JwtStrategy } from './jwt.strategy';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
  imports: [
  UsersModule, 
  PassportModule.register({ defaultStrategy: 'jwt' }),  // jwt作为默认策略 AuthGuard就有默认策略了
  JwtModule.register(
    {
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3600s'} // 1h
    }
  )],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
