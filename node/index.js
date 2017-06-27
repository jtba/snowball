var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/snowball');
mongoose.Promise = Promise;

//--------------Components-----------//
require('./components/creditor/creditor-routes')(app);
require('./components/bill/bill-routes')(app);
require('./components/transaction/transaction-routes')(app);

app.listen(9000, function() {
  console.log('Listening on 9000');
});