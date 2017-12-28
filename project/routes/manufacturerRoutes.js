const express= require('express');
const manufacturerRouter = express.Router();

manufacturerController = require('../controllers/manufacturerController');

//LOOK AT/ search for
manufacturerRouter.get('/',manufacturerController.getAllManufacturers);
manufacturerRouter.get('/all',manufacturerController.getAllManufacturers);
manufacturerRouter.get('/name/:name',manufacturerController.getManufacturerAtmanufacturerName);
//botRouter.get('/id/:id',botController.getBotAtId);
manufacturerRouter.get('/prefix/:prefix',manufacturerController.getManufacturerAtPrefix);

//create
manufacturerRouter.put('/',manufacturerController.putManufacturer);

//update
//manufacturerRouter.post('/edit/:id',manufacturerController.postEditManufacturerAtId);

//delete
manufacturerRouter.delete('/:id',manufacturerController.deleteManufacturerAtId);





module.exports = manufacturerRouter;