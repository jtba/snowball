var Creditor = require('./creditor-schema');

module.exports.createCreditor = function(data){
  var creditor = new Creditor({
    cid: "" + Math.floor((Math.random()*99999999999) + 1),
    name:data.name,
    balance:data.balance,
    rate:data.rate,
    payment:data.payment,
    priority:data.priority,
    type: "Debt"
  });
  
  return creditor.save(function(err, record){
    if (err) return err;
    
    return record;
  });
};

module.exports.getCreditors = function(){
  return Creditor.find({});
};

module.exports.getCreditor = function(cid){
  return Creditor.find({cid:cid});
};

module.exports.updateCreditor = function(cid, data){
  return Creditor.findOneAndUpdate({cid:cid},data,function(err, creditor){
    if(err) return err;
    
    return creditor;
  });
};

module.exports.deleteCreditor = function(cid){
  return Creditor.findOneAndRemove({cid:cid}, function(err){
    if(err) return err;
    
    return true;
  });
};