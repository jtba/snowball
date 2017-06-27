app.controller('creditorsCtrl', function ($scope, $http, $rootScope) {

  $scope.dtOptions = {
    paging: false,
    displayLength: 100
  };

  $scope.dtColumns = [
    {aTargets: 5, bSortable: false}
  ];

  $rootScope.$watch('data_creditors', function (newValue, oldValue, scope) {
    $scope.populateSummary();
  });

  $scope.populateSummary = function () {
    var debt = 0, payments = 0;
    if ($rootScope.data_creditors) {
      for (i = 0; i < $rootScope.data_creditors.length; i++) {
        debt += $rootScope.data_creditors[i].balance;
        payments += $rootScope.data_creditors[i].payment;
      }
    }

    $scope.summarydebt = debt;
    $scope.summarypayments = payments;
  };

  $scope.createCreditor = function (data) {
    var req = {
      method: "POST",
      url: "http://localhost:9000/creditors",
      data: data
    };

    $http(req).then(function () {
      $rootScope.getCreditors();
    }, function (err) {
      console.log('woops!' + err);
    });
  };

  $rootScope.getCreditors = function () {
    $http.get('http://localhost:9000/creditors').then(function (res) {
      $rootScope.data_creditors = res.data;
    });
  };

  $scope.updateCreditor = function (cid,data,key) {
    //Setting the key dynamically because I wont know what part of the object will be updated
    var objectupdate = {};
    objectupdate[key] = data;
    
    var req = {
      method: "PUT",
      url: "http://localhost:9000/creditors/" + cid,
      data: objectupdate
    };
    
    $http(req).then(function() {
      $rootScope.getCreditors();
    });
  };

  $scope.deleteCreditor = function (creditor) {
    $http.delete('http://localhost:9000/creditors/'+ $rootScope.data_creditors[creditor].cid).then(function (res){
      console.log(res);
      $rootScope.getCreditors();
    });
  };

});