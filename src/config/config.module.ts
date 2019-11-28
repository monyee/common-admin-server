import { join } from 'path';
import { ConfigService } from './config.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    {
      provide: ConfigService,
      // useValue prodive使用当前实例,
      // env默认路径相对根目录, env文件请勿放到其他文件或者模块下 nest找不到，不提供serve
      useValue: new ConfigService(`env/${process.env.NODE_ENV||'dev'}.env`) 
    }
  ],
  exports: [ConfigService]
})
export class ConfigModule {

}
