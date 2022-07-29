import express from 'express';

const port = 8000;
const app = express();

app.all('/hello', (req, res, next) => {
	console.log('Middleware is work');
	next();
});

app.route('/hello')
	.get((req, res) => {
		res.send('Hello!')
	})
	.post((req, res) => {
		res.send('Hello! Post!')
	})

app.listen(port, () => {
	console.log(`Серевер за пущен на http://localhost: ${port}`)
})
