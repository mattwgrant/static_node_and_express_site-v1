const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
	const { id } = projects;
	const projectsList = projects;
	const { project_name } = projects;
	const { image_urls } = projects;

	const templateData = { id, project_name, image_urls, projectsList }	
	console.log(project_name);
	res.render('index', templateData);
});

module.exports = router;