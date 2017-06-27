app.controller('billsCtrl', function ($scope, $rootScope, $http) {
  $scope.data_bills;

  $scope.getBillers = function () {
    $http.get('http://localhost:9000/bills/').then(function (output) {
      $scope.data_bills = output.data;
      console.log($scope.data_bills);
    });
  };

  $scope.createBiller = function (data) {
    var req = {
      method: 'POST',
      url: 'http://localhost:9000/bills/',
      data: data
    };

    $http(req).then(function (output) {
      $scope.getBillers();
    });
  };



  $scope.updateBiller = function (bid, data, key) {
    //Setting the key dynamically because I wont know what part of the object will be updated
    var objectupdate = {};
    objectupdate[key] = data;

    var req = {
      method: "PUT",
      url: "http://localhost:9000/bills/" + bid,
      data: objectupdate
    };

    $http(req).then(function () {
      $scope.getBillers();
    });
  };

  $scope.updateBill = function (data, bid) {
    var req = {
      method: 'PUT',
      url: 'http://localhost:9000/bills/' + bid,
      data: data
    };

    $http(req).then(function (output) {
      $scope.getBillers();
    });
  };

  $scope.deleteBiller = function (bid) {
    $http.delete('http://localhost:9000/bills/' + bid).then(function () {
      $scope.getBillers();
    });
  };

  $scope.getTransactions = function () {
    $http.get('http://localhost:9000/transactions/custom/30days').then(function (output) {
      $scope.data_transactions = output.data;
    });
  };

  $scope.createTransaction = function (data) {
    //Transactions require the originating ID (bid for bills cid for creditors)
    data.oid = data.bid;
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