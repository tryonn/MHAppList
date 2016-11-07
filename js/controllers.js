var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/characters.json').success(function(data) {
        $scope.characters = data;
        
    });
}]);