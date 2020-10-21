const express = require('express');
const cookieParser = require('cookie-parser');

app.set('view engine', 'pug');

app.use('/', (req, res, next) => {
	console.log('hi');
})