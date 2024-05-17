const express = require('express');

const { getAllUsers, getUserById } = require('../models/user.model');

const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).json(getAllUsers());
});

router.get('/:id', (req, res) => {
    res.json(getUserById(req.params.id));
});

module.exports = router;