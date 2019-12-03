import { ConfigService } from './config/config.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    ConfigModule,
    //'mongodb://username:password@host:port/database?options...'
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get('DB_HOST'),
    //     authSource: 'admin', // 当前账户授权依赖的数据库必填
    //     useNewUrlParser: true, // 启用新的url方式 一些兼容性处理 避免warning
    //     useUnifiedTopology: true,
    //     useFindAndModify: false, // false可以以使findOneAndUpdate()和findOneAndRemove()
    //     useCreateIndex: true, // 进行自动索引构建
    //   }),
    //   inject: [ConfigService]
    // }),
    UsersModule,
    RoleModule,
    PermissionModule,
      AuthModule,
     UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
