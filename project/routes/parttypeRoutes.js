const express= require('express');
const parttypeRouter = express.Router();

parttypeController = require('../controllers/parttypeController');

//LOOK AT/ search for
parttypeRouter.get('/',parttypeController.getAllParttypes);
parttypeRouter.get('/name/:name',parttypeController.getParttypeAtParttypeName);
//botRouter.get('/id/:id',botController.getBotAtId);

/*
//create
botRouter.post('/produce',botController.postProduceBot);

//update
botRouter.put('/modify/:id',botController.putModifyBotAtId);

//delete
botRouter.delete('/scrap/:id',botController.deleteBotAtId);

*/



module.exports = parttypeRouter;