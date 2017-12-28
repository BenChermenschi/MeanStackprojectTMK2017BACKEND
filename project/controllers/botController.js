var mongoose = require('mongoose');
var Bot = mongoose.model('Bot');
var Manufacturer = mongoose.model('Manufacturer');


//GET : all bots
exports.getAllBots = function(req,res,next){
    //grab all bots
    Bot.find()
        .populate({
            path: 'parts.head',
            model: 'Part',
            populate:{
                path:'manufacturer',
                model:'Manufacturer'
            }
        })

        .populate({
            path: 'parts.armR',
            model: 'Part',
            populate:{
                path:'manufacturer',
                model:'Manufacturer'
            }
        })

        .populate({
            path: 'parts.armL',
            model: 'Part',
            populate:{
                path:'manufacturer',
                model:'Manufacturer'
            }
        })

        .populate({
            path: 'parts.body',
            model: 'Part',
            populate:{
                path:'manufacturer',
                model:'Manufacturer'
            }
        })

        .populate({
            path: 'parts.legs',
            model: 'Part',
            populate:{
                path:'manufacturer',
                model:'Manufacturer'
            }
        })

        .exec(function (err,bots){
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

exports.putBot = function (req,res) {
    console.log("create new bot");

    var bot = new Bot({
        'creator':req.body.creator,
        'botname':req.body.botname,
        'passcode':req.body.passcode,
        'parts':{
            'head':req.body.parts.head,
            'body':req.body.parts.body,
            'armR':req.body.parts.armR,
            'armL':req.body.parts.armL,
            'legs':req.body.parts.legs
        },
        'description':req.body.description
    })
    console.log("bot object : ");
    console.log(bot);
    bot.save(function (err,robot) {
        if(err){
            res.send(err);
        }else{
            res.json(robot);
        }
    });
};

