const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');

const mainRoutes = require('./routes');

// app.use('/', (req, res, next) => {
// 	console.log('hi');
// 	next();
// });

app.listen(3000, () => {
	console.log('This working?');
});