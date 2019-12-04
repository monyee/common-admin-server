import {IsString, IsOptional, IsEmail, IsEmpty, IsFQDN} from 'class-validator'

export class CreateUserDto {
    @IsEmpty({message: '用户名称为必填项！'})
    uname: string
    @IsOptional()
    @IsEmail({}, {message:'邮箱格式有误'}) // 注意这里是两个option
    email?: string
    @IsOptional()
    @IsFQDN({}, {message: '域名格式有误'})
    avatar?: string
    @IsEmpty({message: '用户名称为必填项！'})
    pwd: string
  }