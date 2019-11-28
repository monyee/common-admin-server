import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login (@Request() req) {
    return req.user
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/userinfo')
  userInfo (@Request() req) {
    return req.user
  }

}
