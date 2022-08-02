import express from 'express';

const userRouter = express.Router();

//Middleware for route User
userRouter.use((req, res, next) => {
	console.log('Middleware for route User');
	next();
})

userRouter.post('/login', (req, res) => {
	res.send('login');
});

userRouter.post('/register', (req, res) => {
	res.send('register');
});

export { userRouter };