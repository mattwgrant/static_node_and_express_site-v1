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
 * Set port for server
 */
app.listen(3000);

