import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { User } from './../users/model/user.model';
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

  /**
   * 生存token
   * @param user 
   */
  async createToken (user:User) {
    const payload = {email: user.email, name: user.uname}
    return {
      access_token: this.jwtService.sign(payload) //生成jwt签名
    }
  }

}
