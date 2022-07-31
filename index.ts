import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

//Middleware for all app
app.use((req, res, next) => {
	console.log('Use middleware app.use');
	next();
})

app.use('/users', userRouter);

app.all('/hello', (req, res, next) => {
	console.log('Middleware is work');
	next();
});

app.route('/hello')
	.get((req, res) => {
		throw new Error('Error!!!!')
	})
	.post((req, res) => {
		res.send('Hello! Post!')
	})


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log(err.message);
	res.status(500).send(err.message)
})


app.listen(port, () => {
	console.log(`Серевер за пущен на http://localhost: ${port}`)
})