const express= require('express');
const botRouter = express.Router();

botController = require('../controllers/botController');
botRouter.get('/',botController.getAllBots);
botRouter.get('/:name',botController.getBotAtBotName);
//botRouter.get('/id/:id',botController.getBotAtId);
botRouter.get('/username/:username',botController.getBotAtCreator);

module.exports = botRouter;