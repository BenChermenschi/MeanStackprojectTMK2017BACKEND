var mongoose = require('mongoose');
var manufacturer = mongoose.model('Manufacturer');


//GET : all manufacturers
exports.getAllManufacturers = function(req,res,next){
    //grab all manufacturers
    console.log('search for all manufacturers');
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

//GET manufacturer by id

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

//PUT: create manufacturer
exports.putManufacturer = function (req,res) {
    console.log("create manufacturer");
        var leverancier = new manufacturer(req.body);
        console.log("incomming req : ");
        console.log(req.body);
    leverancier.save(function (err,manufacturer) {
        if(err){
            res.send(err);
        }else{
            res.json(manufacturer);
        }
    });
};
/*
//POST: edit manufacturer
exports.postEditManufacturer = function (req,res) {
    console.log("edit manufacturer");
    console.log("manufacturer id : " + req.params._id.$oid);
}*/

//DELETE: delete manufacturer
exports.deleteManufacturerAtId= function (req,res) {
    console.log("Remove request arrived");
    manufacturer.findByIdAndRemove(req.body._id, function (err,manufacturer) {
        console.log("request : ");
        console.log(req.body);
        if (err){
            console.log(err);
            res.send(err);}
       else {
            console.log("request fulfilled");
            res.json({message:'Request fulfilled : item removed'});
        }

    });
};