var express = require('express');
var router = express.Router();

/// GET blogpost listing
router.get('/', (req, res, next) => {
    res.send('GET route');
});

/// POST blogpost listing
router.post('/', (req, res, next) => {
    console.log(req.body);
    res.send('POST route');
});

module.exports = router;
