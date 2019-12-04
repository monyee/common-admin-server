import { CreateUserDto } from './dto/createUser.Dto';
import { UsersService } from './users.service';
import { Controller, Post, Body, Get, UsePipes, ValidationPipe } from '@nestjs/common';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  async getUsers() {
    // await this.usersService.createMore(usersCto)
    return {
      error: 0,
      users: []
    }
  }

  @Post()
  // @UsePipes(ValidationPipe) 改为全局管道
  async addUser(@Body() createUserDto: CreateUserDto) {
    try {
      console.log(22222, createUserDto)
      //  const user = await this.usersService.add(createUserDto)
      const u = await this.usersService.add(createUserDto)
      console.log(1111111, u)
    } catch (error) {
      console.log('eeee', error)
    }
    return {
      error: 0
    }
  }
}
