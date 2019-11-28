import { User } from './model/user';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  users:User[]

  constructor () {
    this.users = [
      {
        name: 'randy',
        uid: '1123444',
        skey: '1111',
        email: 'zdgg@qq.com',
        pwd: '123'
      },
      {
        name: 'monyee',
        uid: '1123444',
        skey: '1111',
        email: 'zdgg@qq.com',
        pwd: '123'
      },
      {
        name: 'jack',
        uid: '1123444',
        skey: '1111',
        email: 'zdgg@qq.com',
        pwd: '123'
      }
    ]
  }

  async findAll ():Promise<User[]> {
    return this.users || []
  }

  async findOne (name: string):Promise<User|undefined> {
    return this.users.find(u => u.name === name)
  }
}
