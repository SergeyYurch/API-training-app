// import { IMiddleware } from './common/middleware.interface';
// import { Request, Response, NextFunction } from 'express';
// import { ClassConstructor, plainToClass } from 'class-transformer';
// import { validate } from 'class-validator';
// import { IsEmail, IsString } from 'class-validator';

// export class ValidateMiddleware implements IMiddleware {
// 	constructor(private classToValidate: ClassConstructor<object>) {}

// 	execute({ body }: Request, res: Response, next: NextFunction): void {
// 		const instance = plainToClass(this.classToValidate, body);
// 		validate(instance).then((errors) => {
// 			if (errors.length > 0) {
// 				console.log('ошибка есть');
// 			} else {
// 				console.log('ошики нет');
// 			}
// 		});
// 	}
// }

// export class UserLoginDto {
// 	@IsEmail({}, { message: 'Email is wrong' })
// 	email: string;

// 	@IsString({ message: 'Password is wrong' })
// 	password: string;
// }

// const a = new ValidateMiddleware(UserLoginDto);
// console.log(a);
