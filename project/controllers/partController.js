var mongoose = require('mongoose');
var Part = mongoose.model('Part');
var Parttype = mongoose.model('Parttype');
var Manufacturer = mongoose.model('Manufacturer');



//GET : all parts
exports.getAllParts = function(req,res,next){
    //grab all Parts
    Part.find().populate('manufacturer').exec(function (err,Parts){

        //on fail
        if (err){
            console.log(err)
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }else {
            //on success
            console.log(Parts);
            res.status(200).json({
                message: 'Success',
                obj: Parts
            });
        }



    });
}

//GET : Part by Partname
exports.getPartAtPartName = function (req,res) {
    Part.find({partname:req.params.partname}).exec(function (err,Part) {
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

//GET : Part by id
exports.getPartAtId= function (req,res) {
    console.log("searching parts for _id : ");
    console.log(req.params.id);
    Part.find({_id:req.params.id}).exec(function (err,Part) {
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

exports.putPart = function (req,res) {
    //save
    //TODO HIER WAS IK GEBLEVEN : moet koppelen via ID's
    var onderdeel = new Part({
        //EERST USER IN ORDE MAKEN

        'manufacturer':req.body.manufacturer,
        'partname':req.body.partname,
        'type':req.body.type,
        'stats':{
        'armorRating':req.body.stats.armorRating,
        'damageRating':req.body.stats.damageRating
        },
        'description':req.body.description,
        'set':req.body.set
    });
    console.log("onderdeel gemaakt");
    console.log(onderdeel);
    onderdeel.save(function (err,part) {
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.json(part);
        }
    });

}