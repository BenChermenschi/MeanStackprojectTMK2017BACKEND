var express = require('express');
var router = express.Router();

var botRoutering = require('./bot/botRoutering');
var manufacturerRoutering = require('./manufacturere/manufacturerRoutering');
var gebruikerRoutering = require('./gebruiker/gebruikerRoutering');
var partRouting = require('./part/partRouting');
var parttypeRouting = require('./parttype/parttypeRouting');
var skillRouting = require('./skill/skillRouting');

router.get('/',function(req,res){
    res.send({success: true, message:'First test success'});
});

router.use('/bot',botRoutering);
router.use('/gebruiker',gebruikerRoutering);
router.use('/manufacturer',manufacturerRoutering);
router.use('/part',partRouting);
router.use('/parttype',parttypeRouting);
router.use('/skill',skillRouting);