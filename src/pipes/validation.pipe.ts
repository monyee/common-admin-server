import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      // throw new BadRequestException('Validation failed');
      // 自定义参数报错报文
      let constraints = errors[0].constraints

      for (const key in constraints) {
        const element = constraints[key];
        throw new HttpException({
          errno: 1024,
          message: element
        }, 200)
      }
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}