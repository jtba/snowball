app.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
          .state('summary', {
            url: "/summary",
            templateUrl: "app/components/summary/summary.html",
            controller: "summaryCtrl"
          })
          .state('creditors', {
            url: "/creditors",
            templateUrl: "app/components/creditors/creditors.html",
            controller: "creditorsCtrl"
          })
          .state('tracking', {
            url: "/tracking",
            templateUrl: "app/components/tracking/tracking.html",
            controller: "trackingCtrl"
          })
          .state('strategy', {
            url: "/strategy",
            templateUrl: "app/components/strategy/strategy.html",
            controller: "strategyCtrl"
          })
          .state('ledger', {
            url: "/ledger",
            templateUrl: "app/components/ledger/ledger.html",
            controller: "ledgerCtrl"
          })
          .state('bills', {
            url: "/bills",
            templateUrl: "app/components/bills/bills.html",
            controller: "billsCtrl"
          });
});