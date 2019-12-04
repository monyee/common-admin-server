import { prop, getModelForClass } from '@typegoose/typegoose';


export class User {
  @prop({required: true})
  uname: string
  @prop()
  email?: string
  @prop()
  avatar?: string
  @prop({required: true})
  pwd: string
}

export const UserModel = getModelForClass(User)