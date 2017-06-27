var bill = require('./bill-controller');

module.exports = function (app) {
  app.route('/bills/')
          .get(function (req, res) {
            bill.getBills().then(function(output){
              res.send(output);
            });
          })
          .post(function (req, res) {
            bill.createBill(req.body).then(function(output){
              res.send(output);
            });
          });
  app.route('/bills/:bid')
          .put(function (req, res) {
            bill.updateBill(req.params.bid, req.body).then(function(output){
              res.send(output);
            });
            //res.send(bill.updateBill(req.params.bid,req.body));
          })
          .delete(function (req, res) {
            bill.deleteBill(req.params.bid).then(function(output){
              res.send(true);
            });
          });
};