app.controller('trackingCtrl', function ($scope, $http) {


  $scope.getBillers = function () {
    $http.get('http://localhost:9000/bills/').then(function (res) {
      $scope.data_bills = res.data;
    });
  };

  $scope.getCreditors = function () {
    $http.get('http://localhost:9000/creditors').then(function (res) {
      $scope.data_creditors = res.data;
    });
  };

  $scope.getTransactions = function () {
    $http.get('http://localhost:9000/transactions/custom/30days').then(function (res) {
      $scope.data_transactions = res.data;
    });
  };

  $scope.createTransaction = function (data,oid) {
    //Transactions require the originating ID (bid for bills cid for creditors)
    data.oid = oid;
    var req = {
      method: "POST",
      url: "http://localhost:9000/transactions",
      data: data
    };

    $http(req).then(function () {
      $scope.getTransactions();
    });
  };


});