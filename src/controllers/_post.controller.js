const express = require('express');
const helpers = require('../models/post.model'); 

const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).json(helpers.getAllPosts());
});

router.post('/:id', (req, res) => {
    res.status(200).json(helpers.getPostById(req.params.id));
});

module.exports = router;
