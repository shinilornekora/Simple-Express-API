const express = require('express');

const helpers = require('../models/user.model');

const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).json(helpers.getAllUsers());
});

router.get('/:id', (req, res) => {
    res.status(200).json(helpers.getUserById(req.params.id));
});

module.exports = router;