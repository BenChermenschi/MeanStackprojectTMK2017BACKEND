var mongoose = require('mongoose');
var Bot = mongoose.model('Bot');


//GET : all bots
exports.getAllBots = function(req,res,next){
    //grab all bots
    Bot.find().exec(function (err,bots){
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
            obj: bots
        });
    });
}

//GET : bot by botname
exports.getBotAtBotName = function (req,res) {
    Bot.find({botname:req.params.botname}).exec(function (err,bot) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
       res.status(200).json({
           message: 'Success',
           obj: bot
       }) ;
    });
    
}

//GET : bot by creator
exports.getBotAtCreator = function (req,res) {
    Bot.find({creator:req.params.creator}).exec(function (err,bot) {
        //on fail
        if(err){
            return res.status(500).json({
                title:'Error occured',
                error:err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: bot
        }) ;
    });

}
