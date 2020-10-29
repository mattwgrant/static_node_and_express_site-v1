const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
	res.redirect('/');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const { project_name } = projects[id];
	const { description } = projects[id];
	const { technologies } = projects[id];
	const { image_urls } = projects[id];

	const templateData = { project_name, description, technologies, image_urls, projects };
	res.render(`project`, templateData);
});

module.exports = router;