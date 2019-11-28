import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from 'src/users/model/user';
import {JwtService} from '@nestjs/jwt'

@Injectable()
export class AuthService {

  constructor (
    private readonly usersService:UsersService,
    private readonly jwtService:JwtService
  ) {}

  async validateUser (username:string, passwd:string): Promise<any> {
    const user:User = await this.usersService.findOne(username)
    if (user && user.pwd === passwd) {
      const {pwd, ...result} = user
      return result
    }
    return null
  }

  async login (user:any) {
    
    const payload = {user: user.username, sub: user.userId}
    return {
      access_token: this.jwtService.sign(payload) //生成jwt签名
    }
  }

}
