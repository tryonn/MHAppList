angular.module('characterControllers').factory('myService', ['$http', function($http) {

    var that = this;

    var heroes = [];

    /*    $http.get('js/characters.json').success(function(data) {
            this.heroes = data;
        }); */

    function set(data) {
        if (data.length > 1 && heroes.length == 0) {
            heroes = data;

            console.log("Adicionado lista, " + heroes);
        } else {
            heroes.push(data);

            console.log("Adicionado um, " + heroes);
        }
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
