var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/characters.json').success(function(data) {

        $scope.characters = data;
        $scope.filterSelection = {text : 'Nome', value: 'name'};
        $scope.order;
        $scope.msgDelete;

    });

    $scope.toggleSelection = function() {
        if ($scope.filterSelection.value === 'name') {

            $scope.filterSelection = {text:'Nome Real', value:'real_name'};
            $scope.order = $scope.filterSelection.value;

        } else if ($scope.filterSelection.value === 'real_name') {

            $scope.filterSelection = {text:' Qualquer Texto', value:'$'};
            $scope.queryFilter = $scope.queryText;

        } else {
        	$scope.filterSelection = {text:'Nome', value:'name'};
            $scope.order = $scope.filterSelection.value;
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

    $scope.deleteItem = function(item){
        $scope.showDiv = !$scope.showDiv;
        $scope.characters.splice($scope.characters.indexOf(item), 1);
        $scope.msgDelete = item.name + " Deletado com sucesso";
    }


}]);