const express = require('express');
const { getAllPosts, getPostById } = require('../models/post.model'); 

const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).json(getAllPosts());
});

router.post('/:id', (req, res) => {
    res.status(200).json(getPostById(req.params.id));
});

module.exports = router;
