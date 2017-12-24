const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;


var partSchema = new Schema({
    manufacturer:{type:Schema.Types.ObjectId, ref:'manufacturer'},
    partname:{type:String,required:true,unique:true},
    passcode:{type:String,required:true,unique:false},
    type:{type:Schema.Types.ObjectId,ref:'parttype'},
    stats:{
        armorRating:{type:Number,required:true},
        damageRating:{type:Number,required:true}
    },
    description:{type:String,required:true}
});

partSchema.plugin(mongooseUniqueValidator);
//exporting botscheme
const parts = module.exports = mongoose.model("Part",partSchema);

module.exports.getParts = function (callback) {
    console.log('cataloging all parts' + id);
    parts.find({},callback);
}

module.exports.getPartById = function (id,callback) {
    console.log('grabbing part at id :' + id);
    parts.find({_id: {$in: id}},callback);
}

module.exports.savePart = function(part,callback){
    part.save(callback);
}
