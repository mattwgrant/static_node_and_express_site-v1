const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');
const aboutRoutes = require('./routes/about')

app.use(mainRoutes);
app.use('/projects', projectRoutes);
app.use('/about', aboutRoutes);



// app.get('/projects', (req, res) => {
// 	res.send('Here are my porjects!');
// });



app.listen(3000);

