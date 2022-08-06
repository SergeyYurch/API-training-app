import { Container } from 'inversify';
import { App } from './app';
import { ExeptionFilter } from './common/errors/exeption.filter';
import { LoggerService } from './logger/logger.service';
import { TYPES } from './types';
import { UserController } from './users/users.controller';
import { ILogger } from './logger/logger.interface'
import { IExeptionFilter } from './common/errors/exeption.filter.interface';


const appContainer = new Container();
appContainer.bind<ILogger>(TYPES.ILogger).to(LoggerService);
appContainer.bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter);
appContainer.bind<UserController>(TYPES.UserController).to(UserController);
appContainer.bind<App>(TYPES.Applocation).to(App);
const app = appContainer.get<App>(TYPES.Applocation);
app.init();

export { app, appContainer };