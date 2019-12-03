import { prop, getModelForClass } from '@typegoose/typegoose';


export class User {
  @prop()
  uname: string
  @prop()
  email?: string
  @prop()
  avatar?: string
  @prop()
  pwd: string
}

export const UserModel = getModelForClass(User)