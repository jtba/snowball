'use strict';
var creditor = require('./creditor-controller');

module.exports = function (app) {

  /*
   * Return all creditors or perform mass updates/deletes of creditors
   */
  app.route('/creditors/')
          .get(function (req, res) {
            creditor.getCreditors().then(function(output){
              res.send(output);
            });
          })
          .post(function (req, res) {
            
            creditor.createCreditor(req.body).then(function(output){
              res.send(output);
            });
          });

  app.route('/creditors/:cid')
          .get(function (req, res) {
            creditor.getCreditor(req.params.cid).then(function(output){res.send(output);});
          })
          .put(function (req, res) {
            res.send(creditor.updateCreditor(req.params.cid, req.body));
          })
          .delete(function (req, res) {
            creditor.deleteCreditor(req.params.cid).then(function(output){res.send(output);});
          });


  //other routes..
};