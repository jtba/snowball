var Transaction = require('./transaction-schema');

module.exports.createTranscation = function (data) {
  var transaction = new Transaction({
    tid: "" + Math.floor((Math.random()*99999999999) + 1),
    date: Date(),
    name: data.name,
    amount: data.amount,
    type:data.type,
    oid:data.oid
  });
  
  return transaction.save(function(err,record){
    if (err) return err;
    
    return record;
  });
};

module.exports.readTransactions = function () {
  return Transaction.find({});
};

module.exports.readTransaction = function (tid) {
  return Transaction.find({tid:tid});
};

module.exports.getLastThirtyDays = function () {
  var date = new Date(new Date().getTime() - (60*60*24*31*1000));
  return Transaction.find({date:{$gt: date}});
};

module.exports.getLastSevenDays = function () {
  var date = new Date(new Date().getTime() - (60*60*24*8*1000));
  return Transaction.find({date:{$gte: date}});
};