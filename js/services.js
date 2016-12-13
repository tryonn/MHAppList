angular.module('characterControllers').factory('myService', ['$http', function($http) {

    var that = this;

    var heroes = [];

    function set(data) {
        if (Array.isArray(data) && heroes.length == 0) {
            heroes = data;
        } else if (!Array.isArray(data)) {
            console.log("item >>> " + data);
            heroes.push(data);
            console.log("heroes >>> " + heroes);
        }
    }

    function get() {
        return heroes;
    }

    function remove(data) {
        heroes.splice(heroes.indexOf(data), 1);
    }

    return {
        set: set,
        get: get,
        remove: remove,
    }

}]);
