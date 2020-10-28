const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
	const { id } = projects;
	
	// const { project_name } = projects[numberOfProjects];
	// const { image_urls } = projects[numberOfProjects];

	// const templateData = { project_name, image_urls }	
	console.log(id);
	res.render('index');
});

module.exports = router;