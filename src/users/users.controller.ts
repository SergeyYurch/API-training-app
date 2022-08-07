import { NextFunction, Request, Response } from 'express';
import { BaseController } from '../common/base.controller';
import { LoggerService } from './../logger/logger.service';
import { HTTPError } from './../common/errors/http-error.class';
import { inject, injectable } from 'inversify';
import { ILogger } from '../logger/logger.interface';
import { TYPES } from '../types';
import 'reflect-metadata';
import { IUserController } from './user.controller.interface';

@injectable()
export class UserController extends BaseController implements IUserController {
	constructor(@inject(TYPES.ILogger) private loggerService: ILogger) {
		super(loggerService);
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		]);
	}
	login(req: Request, res: Response, next: NextFunction): void {
		console.log('d');
		next(new HTTPError(401, 'ошибка авторизации'));
	}

	register(req: Request, res: Response, next: NextFunction): void {
		this.ok(res, 'register');
	}
}
