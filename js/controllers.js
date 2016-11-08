var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/characters.json').success(function(data) {
        $scope.characters = data;
        $scope.filterSelection = 'name';



    });
    $scope.toggleSelection = function() {
        if ($scope.filterSelection === 'name') {
            $scope.filterSelection = 'name_real';
        } else {
            $scope.filterSelection = 'name';
        }


    }

    $scope.queryFilter = function(item) {
        if ($scope.queryText == undefined) {
            return true;
        } else {

            if ($scope.filterSelection === 'name' && item.name.toLowerCase().indexOf($scope.queryText.toLowerCase()) != -1) {
                return true;
            }
            if ($scope.filterSelection === 'name_real' && item.name_real.toLowerCase().indexOf($scope.queryText.toLowerCase()) != -1) {
                return true;
            }

        }
        return false;
    }


}]);