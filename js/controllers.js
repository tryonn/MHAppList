var characterControllers = angular.module('characterControllers', ['angularModalService', 'ngAnimate']);

characterControllers.controller('CustomController', ['$scope', 'close', 'item', function($scope, close, item) {

    $scope.item = item;

    $scope.close = function(result) {
        close(result, 500); // close, but give 500ms for bootstrap to animate
    };


}]);

characterControllers.controller('NewController', ['$scope', '$http', 'myService', function($scope, $http, myService){

    $scope.hero = {};

    $scope.submeter = function() {
        myService.set($scope.hero);

        $scope.hero = '';
    }
    
}]);


characterControllers.controller('ListController', ['$scope', 'ModalService', '$http', 'myService' ,function($scope, ModalService, $http, myService) {
    $http.get('js/characters.json').success(function(data) {
        
        //seta no serviço todos os heroes - na primeira vez...
        //refatorar [no futuro] para que a "requisicao" seja feita em um serviço
        myService.set(data);    

        $scope.characters = myService.get();
       
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

<<<<<<< HEAD
 
=======
    //função reescrita dentro da response do modal. abaixo
    /*$scope.deleteItem = function(item) {
        console.log("item : " + item);
        $scope.showDiv = !$scope.showDiv;
        $scope.characters.splice($scope.characters.indexOf(item), 1);
        $scope.msgDelete = item.name + " Deletado com sucesso";
    }*/

>>>>>>> de8182f228ee4238fc2b2bc16af1b2037fcaf2af
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
            modal.element.modal(item);
            modal.close.then(function(result) {
<<<<<<< HEAD
                deleteItem(item);
=======
                //funcao remover...
                myService.remove(item);
>>>>>>> de8182f228ee4238fc2b2bc16af1b2037fcaf2af
            });
        });

    };
   function deleteItem (item) {
        $scope.showDiv = true;
        $scope.characters.splice($scope.characters.indexOf(item), 1);
        $scope.msgDelete = item.name + " has been successfully removed";

        $('.js-delete-msg').fadeTo(2000, 500).slideUp(500, function(){
               
            $('.js-delete-msg').slideUp(500);
        });   
    }

}]);