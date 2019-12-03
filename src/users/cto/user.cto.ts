import {IsString, IsOptional} from 'class-validator'

export class UserCto {
    @IsString()
    name: string
    @IsOptional()
    @IsString()
    email?: string
    @IsOptional()
    @IsString()
    avatar?: string
    @IsString()
    pwd: string
  }