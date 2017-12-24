const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var botSchema = new Schema({
    creator:{type:Schema.Types.ObjectId, ref:'User'},
    botname:{type:String,required:true,unique:true},
    parts:{
        head:{type:Schema.Types.ObjectId, ref:'Part'},
        body:{type:Schema.Types.ObjectId, ref:'Part'},
        armR:{type:Schema.Types.ObjectId, ref:'Part'},
        armL:{type:Schema.Types.ObjectId, ref:'Part'},
        legs:{type:Schema.Types.ObjectId, ref:'Part'}
    },
    description:{type:String,required:false,unique:false}
});

schema.plugin(mongooseUniqueValidator);

const bots = module.exports = mongoose.model('Bot',botSchema);

module.exports.getBots = function (callback) {
    console.log('grabbing all bots in hangar' + id);
    bots.find({},callback);
}

module.exports.getBotById = function (id,callback) {
    console.log('grabbing bot by id : ' + id);
    bots.find({_id: {$in: id}},callback);
}

module.exports.saveBot = function(bot,callback){
    bot.save(callback);
}
