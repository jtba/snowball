var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var creditorSchema = new Schema({
  cid:String,
  name:String,
  type:String,
  balance:Number,
  payment:Number,
  rate:Number,
  priority:Number,
  url:String
});

var Creditor = mongoose.model('creditor', creditorSchema);

module.exports = Creditor;

