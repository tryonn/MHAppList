angular.module('characterControllers').factory('myService', ['$http', function($http) {

    var that = this;

    //this.heroes = [];

    $http.get('js/characters.json').success(function(data) {
        this.heroes = data;
    });

    function set(data) {
        heroes.push(data);
    }

    function get() {
        return heroes;
    }

    return {
        set: set,
        get: get,
    }

}]);


// Criar outro service que faz uma requisicao do json, retorna todos, e nesse ele apenas faz os metodos de acesso.
