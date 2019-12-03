import { User, UserModel } from './model/user.model';
import { Injectable } from '@nestjs/common';
import { DocumentType } from '@typegoose/typegoose';

@Injectable()
export class UsersService {

  users:User[]

  constructor () {
    this.users = [
      {
        uname: 'randy',
        email: 'zdgg@qq.com',
        pwd: '123'
      },
      {
        uname: 'monyee',
        email: 'zdgg@qq.com',
        pwd: '123'
      },
      {
        uname: 'jack',
        email: 'zdgg@qq.com',
        pwd: '123'
      }
    ]
  }

  async add (user:User):Promise<any> {
    const rs = UserModel.create(user, (err, res) => {
      
      console.log(7777777, err, res)
    }).then(res=>{
      console.log(8888, res)
    }).catch(e=>{
      console.log(99999999, e)
    })
console.log(66666, rs)
    return rs
  }

  async findAll ():Promise<User[]> {
    return this.users || []
  }

  async findOne (uname: string):Promise<User|undefined> {
    return this.users.find(u => u.uname === uname)
  }
}
