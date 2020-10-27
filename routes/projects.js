const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res) => {
	res.render('project');
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	res.redirect(`/projects/${id}`);
});

module.exports = router;