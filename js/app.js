var mhApp = angular.module('mhApp', [
  'ngRoute',
  'characterControllers'
]);

mhApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'partials/list.html',
    controller: 'ListController'
  }).
  when('/new', {
    templateUrl : 'partials/new.html',
    controller: 'NewController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);