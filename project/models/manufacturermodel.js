const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var mongooseUniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

var manufacturerSchema = new Schema({
    "name":{type:String,type:String,required:true,unique:true},
    "description":{type:String,type:String,required:true,unique:true},
    "prefix":{type:String,type:String,required:true,unique:true}
});

manufacturerSchema.plugin(mongooseUniqueValidator);
//exporting botscheme
const manufacturers = module.exports = mongoose.model("Manufacturer",manufacturerSchema);

module.exports.getManufacturers = function (callback) {
    console.log('searching all Manufacturers');
    manufacturers.find({},callback);
}

module.exports.getManufacturersById = function (id,callback) {
    console.log('grabbing manufacturer by id : ' + id);
    manufacturers.find({_id: {$in: id}},callback);
}

module.exports.saveManufacturer = function(manufacturer,callback){
    manufacturer.save(callback);
}