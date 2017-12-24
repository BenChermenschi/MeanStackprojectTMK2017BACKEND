const express= require('express');
const manufacturerRouter = express.Router();

manufacturerController = require('../controllers/manufacturerController');

//LOOK AT/ search for
manufacturerRouter.get('/',manufacturerController.getAllManufacturers);
manufacturerRouter.get('/name/:name',manufacturerController.getManufacturerAtmanufacturerName);
//botRouter.get('/id/:id',botController.getBotAtId);
manufacturerRouter.get('/prefix/:prefix',manufacturerController.getManufacturerAtPrefix);
/*
//create
botRouter.post('/produce',botController.postProduceBot);

//update
botRouter.put('/modify/:id',botController.putModifyBotAtId);

//delete
botRouter.delete('/scrap/:id',botController.deleteBotAtId);

*/



module.exports = manufacturerRouter;