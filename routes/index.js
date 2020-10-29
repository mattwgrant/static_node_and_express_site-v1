const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


/*
 * Routes to the index/landing page and generates data to populate all projects
 */
router.get('/', (req, res) => {
	const { id } = projects;
	const projectsList = projects;
	const { project_name } = projects;
	const { image_urls } = projects;

	const templateData = { id, project_name, image_urls, projectsList }	

	res.render('index', templateData);
});

module.exports = router;