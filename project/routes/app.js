var express = require('express');
var router = express.Router();

var versieEenRouter = require('./v1/v1');

router.use('/v1',versieEenRouter);

module.exports = router;