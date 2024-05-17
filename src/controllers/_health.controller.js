const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.status(200).send(`
        \nСервер работает, и это прекрасно.\n
    `);
});

module.exports = router;
