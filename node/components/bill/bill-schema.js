var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BillSchema = new Schema({
  bid:{type:String, required:true},
  name:{type:String, required:true},
  type:{type:String, required:true},
  url:String,
  notes:String
});

var Bill = mongoose.model('bill',BillSchema);

module.exports = Bill;