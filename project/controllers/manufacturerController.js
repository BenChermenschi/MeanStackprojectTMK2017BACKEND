var mongoose = require('mongoose');
var manufacturer = mongoose.model('Manufacturer');


//GET : all manufacturers
exports.getAllManufacturers = function(req,res,next){
    //grab all manufacturers
    manufacturer.find().exec(function (err,manufacturers){
        //on fail
        if (err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        //on success
        res.status(200).json({
            message: 'Success',
            obj: manufacturers
        });
    });
}

//GET : manufacturer by botname
exports.getManufacturerAtmanufacturerName = function (req,res) {
    manufacturer.find({name:req.params.name}).exec(function (err,manufacturer) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: manufacturer
        }) ;
    });

}

//GET : manufacturer by prefix
exports.getManufacturerAtPrefix = function (req,res) {
    manufacturer.find({prefix:req.params.prefix}).exec(function (err,manufacturer) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: manufacturer
        }) ;
    });

}
