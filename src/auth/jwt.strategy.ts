import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  /**
   * 
   * @param payload 验证通过后解码的json
   */
  async validate(payload: any) {
      console.log('jwt validate success')
    // Passport 将基于 validate() 方法的返回值构建一个user 对象，并将其作为属性附加到
    return { userId: payload.sub, username: payload.username };
  }
}