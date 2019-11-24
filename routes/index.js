const express = require('express');
const router = express.Router();
const app = require('../data/data.json')

router.get('/', function(req, res, next) {
    res.render('index', { projects });
});

module.exports = router;