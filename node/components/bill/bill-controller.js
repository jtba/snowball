var Bill = require('./bill-schema');

module.exports.createBill = function(data){
  var bill = new Bill({
    bid: "" + Math.floor((Math.random()*99999999999) + 1),
    name:data.name,
    url:data.url,
    notes:data.notes,
    type:'Service'
  });
  
  return bill.save(function (err){
    if(err) return err;
    
    return true;
  });
};

module.exports.getBills = function(){
  return Bill.find({});
};

module.exports.updateBill = function(bid, data){
  return Bill.findOneAndUpdate({bid:bid},data).exec();
};

module.exports.deleteBill = function(bid){
  return Bill.findOneAndRemove({bid:bid});
};