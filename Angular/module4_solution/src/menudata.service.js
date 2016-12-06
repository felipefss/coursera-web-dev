(function() {
    angular.module('data')
    .service('MenuDataService', MenuDataService);
    var baseURI = 'https://davids-restaurant.herokuapp.com/';

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function() {
            var httpObj = {
                method: 'GET',
                url: (baseURI + 'categories.json')
            };

            return $http(httpObj).then(function(result) {
                return result.data;
            });
        };

        service.getItemsForCategory = function(categoryShortName) {
            var httpObj = {
                method: 'GET',
                url: (baseURI + 'menu_items.json?category=' + categoryShortName)
            };

            return $http(httpObj).then(function(result) {
                return result.data.menu_items;
            });
        };
    }
})();
