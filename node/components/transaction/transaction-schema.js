var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  tid:{type:String, required:true},
  date:{type:Date, required:true},
  name:{type:String, required:true},
  oid:{type:String, requires:true},
  amount:{type:Number, required:true},
  type:{type:String, required:true}
});

var Transaction = mongoose.model('ledger', transactionSchema);

module.exports = Transaction;