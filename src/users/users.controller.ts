import { UserCto } from './cto/user.cto';
import { UsersService } from './users.service';
import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserModel } from './model/user.model';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}

    @Get()
    async getUsers () {
        // await this.usersService.createMore(usersCto)
        return {
            error: 0,
            users: []
        }
    }

    @Post()
    async addUsers (@Body() userCto: UserCto) {
        try {
            console.log(22222, userCto)
        //  const user = await this.usersService.add(userCto)
        const u = await UserModel.create({ name: 'JohnDoe' });
         console.log(1111111, u)
        } catch (error) {
            console.log(11114444111, error)
        }
        return {
            error: 0
        }
    }
}
