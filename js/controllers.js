var characterControllers = angular.module('characterControllers', ['angularModalService', 'ngAnimate']);

characterControllers.controller('CustomController', ['$scope', 'close', 'item', function($scope, close, item) {

    $scope.item = item;

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };


}]);


characterControllers.controller('ListController', ['$scope', 'ModalService', '$http', function($scope, ModalService, $http) {
    $http.get('js/characters.json').success(function(data) {

        $scope.characters = data;
        $scope.filterSelection = {
            text: 'Nome',
            value: 'name'
        };
        $scope.order;
        $scope.msgDelete;

    });

    $scope.toggleSelection = function() {
        if ($scope.filterSelection.value === 'name') {

            $scope.filterSelection = {
                text: 'Real Name',
                value: 'real_name'
            };
            $scope.order = $scope.filterSelection.value;

        } else{
            $scope.filterSelection = {
            text: 'Name',
            value: 'name'
        };

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

 
    $scope.viewItem = function(item) {
        console.log('Testing ' + item.name);
    }

    $scope.showCustom = function(item) {

        ModalService.showModal({
            templateUrl: "partials/details.html",
            controller: "CustomController",
            inputs: {
                item: item,

            }
        }).then(function(modal) {
            console.log(modal);

            modal.close.then(function(result) {

            });


        });

    };

    $scope.showConfirmation = function(item) {

        ModalService.showModal({
            templateUrl: "partials/confirmation.html",
            controller: "CustomController",
            inputs: {
                item: item,

            }
        }).then(function(modal) {
            console.log('teste' + item.name);
            modal.element.modal(item);
            modal.close.then(function(result) {
                deleteItem(item);
            });
        });

    };
   function deleteItem (item) {
        $scope.showDiv = true;
        $scope.characters.splice($scope.characters.indexOf(item), 1);
        $scope.msgDelete = item.name + " Deletado com sucesso";
    }


}]);