var app = angular.module('SnowBall',['ui.router','datatables','xeditable']);

app.filter('percentage', ['$filter', function ($filter){
            return function (input, decimals){
              return $filter('number')(input, decimals) + '%';
            };
}]);

app.run(function(editableOptions){
  editableOptions.theme = 'bs3';
});