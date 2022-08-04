import express, { Express } from 'express';
import { Server } from 'http'
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';
import { ExeptionFilter } from './common/errors/exeption.filter';

export class App {
	app: Express;
	server: Server;
	port: number;
	logger: LoggerService;
	UserController: UserController;
	exeptionFilter: ExeptionFilter;

	constructor(
		logger: LoggerService,
		UserController: UserController,
		exeptionFilter: ExeptionFilter
	) {
		this.app = express();
		this.port = 8000;
		this.logger = logger;
		this.UserController = UserController;
		this.exeptionFilter = exeptionFilter;
	}
	useRoutes() {
		this.app.use('/users', this.UserController.router);
	}

	useExeptionFilters() {
		this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
	}

	public async init() {
		this.useRoutes();
		this.useExeptionFilters();
		this.server = this.app.listen(this.port);
		this.logger.log(`Серевер запущен на http://localhost: ${this.port}`);
	}
}