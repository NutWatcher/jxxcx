var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({aa:3333});
    res.render('index', { title: 'Express' });
});

module.exports = router;
