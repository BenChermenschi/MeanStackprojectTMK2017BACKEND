const express= require('express');
const partRouter = express.Router();

partController = require('../controllers/partController');

//LOOK AT/ search for
partRouter.get('/',partController.getAllParts);
partRouter.get('/name/:name',partController.getPartAtPartName);
//partRouter.get('/id/:id',partController.getpartAtId);
partRouter.get('/manufacturer/:manufacturer',partController.getPartAtManufacturer);
/*
//create
partRouter.post('/produce',partController.postProducepart);

//update
partRouter.put('/modify/:id',partController.putModifypartAtId);

//delete
partRouter.delete('/scrap/:id',partController.deletepartAtId);

*/



module.exports = partRouter;