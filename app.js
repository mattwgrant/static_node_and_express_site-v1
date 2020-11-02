/*
 * Required necessary modules and middleware
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

/*
 * Route handlers
 */
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about')

app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);

/*
 * Error handlers
 */

app.use((req, res, next) => {
	const err = new Error('Sorry, this page does not exist');
	err.status = 404;
	next(err);
});

// app.use((req, res, next) => {
// 	const err = new Error('Oops, something went wrong');
// 	err.status = 500;
// 	next(err);
// });

app.use((err, req, res, next) => {
	res.locals.error = err;
	
	if (err.status === 404) {
		err.message = 'Sorry, this page does not exist';
		console.log(err);
		res.render('page-not-found', err);
	} else {
		err.status = 500;
		err.message = 'Oops, something went wrong';
		console.log(err)
		res.render('error', err);
	} 
});

/*
 * Set port for server
 */
app.listen(3000, () => {
	console.log('Your server is running on localhost:3000!');
});

