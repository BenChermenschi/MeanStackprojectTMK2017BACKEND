const express= require('express');
const botRouter = express.Router();

botController = require('../controllers/botController');

//LOOK AT/ search for
botRouter.get('/',botController.getAllBots);
botRouter.get('/name/:name',botController.getBotAtBotName);
//botRouter.get('/id/:id',botController.getBotAtId);
botRouter.get('/creator/:creator',botController.getBotAtCreator);
/*
//create
botRouter.post('/produce',botController.postProduceBot);

//update
botRouter.put('/modify/:id',botController.putModifyBotAtId);

//delete
botRouter.delete('/scrap/:id',botController.deleteBotAtId);

*/



module.exports = botRouter;