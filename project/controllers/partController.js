var mongoose = require('mongoose');
var Part = mongoose.model('Part');


//GET : all parts
exports.getAllParts = function(req,res,next){
    //grab all Parts
    Part.find().exec(function (err,Parts){
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
            obj: Parts
        });
    });
}

//GET : Part by Partname
exports.getPartAtPartName = function (req,res) {
    Part.find({name:req.params.name}).exec(function (err,Part) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: Part
        }) ;
    });

}

//GET : Part by manufacturer
exports.getPartAtManufacturer = function (req,res) {
    Part.find({manufacturer:req.params.manufacturer}).exec(function (err,Part) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: Part
        }) ;
    });

}
