import { User, UserModel } from './model/user.model';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  users:User[]

  constructor () {}

  async add (user:User):Promise<any> {
    let rs = null
    try {
      rs = await UserModel.create(user)
    } catch (e) {
      console.log('create error:', e)
    }
    return rs
  }

  async findAll ():Promise<User[]> {
    return this.users || []
  }

  async findOne (uname: string):Promise<User|undefined> {
    return this.users.find(u => u.uname === uname)
  }
}
