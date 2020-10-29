const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

/*
 * Redirects to the home page if /projects is typed in without a number
 */
router.get('/', (req, res) => {
	res.redirect('/');
});

/*
 * Dynamically sets routes to each project based off of its ID
 */
router.get('/:id', (req, res) => {
	const { id } = req.params;
	const { project_name } = projects[id];
	const { description } = projects[id];
	const { technologies } = projects[id];
	const image_urls = projects[id].image_urls.slice(1);
	const { live_link } = projects[id];
	const { github_link } = projects[id];

	const templateData = { project_name, description, technologies, image_urls, projects, live_link, github_link };
	res.render(`project`, templateData);
});

module.exports = router;