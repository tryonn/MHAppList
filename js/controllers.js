var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/characters.json').success(function(data) {
        $scope.characters = data;
        //$scope.filterSelection.value = 'name';
        $scope.filterSelection = {text : 'NAME',value: 'name'};



    });
    $scope.toggleSelection = function() {
        if ($scope.filterSelection.value === 'name') {
            $scope.filterSelection = {text:'Real Name', value:'real_name'}  
            
        } else {
        	$scope.filterSelection = {text:'Name', value:'name'}  
         
        }


    }

    $scope.queryFilter = function(item) {
        if ($scope.queryText == undefined) {
            return true;
        } else {

            if ($scope.filterSelection.value === 'name' && item.name.toLowerCase().indexOf($scope.queryText.toLowerCase()) != -1) {
                return true;
            }
            if ($scope.filterSelection.value === 'real_name' && item.real_name.toLowerCase().indexOf($scope.queryText.toLowerCase()) != -1) {
                return true;
            }

        }
        return false;
    }


}]);