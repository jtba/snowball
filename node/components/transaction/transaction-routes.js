var transaction = require('./transaction-controller');

module.exports = function (app) {
  app.route('/transactions/')
          .get(function (req, res) {
            transaction.readTransactions().then(function (output) {
              res.send(output);
            });
          })
          .post(function (req, res) {
            transaction.createTranscation(req.body).then(function (output) {
              res.send(true);
            });
          });
  app.route('/transactions/:tid')
          .get(function (req, res) {
            transaction.readTransaction(req.params.tid).then(function (output) {
              res.send(output);
            });
          });

  app.route('/transactions/custom/:type')
          .get(function (req, res) {
            switch(req.params.type) {
              case "30days":
                transaction.getLastThirtyDays().then(function(output){res.send(output);});
                break;
              case "7days":
                transaction.getLastSevenDays().then(function(output){res.send(output);});
                break;
            }
          });

};