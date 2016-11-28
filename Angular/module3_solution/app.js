(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
            template: 'foundItems.html',
            scope: {},
            controller: foundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    function foundItemsDirectiveController() {
        var found = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var search = this;

        search.narrowItDown = function() {
            if (search.searchTerm.length === 0) {
                //'Nothing found'
            } else {
                MenuSearchService.getMatchedMenuItems(search.searchTerm)
                .then(function(result) {
                    search.found = result;
                });
            }
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function(searchTerm) {
            var httpObj = {
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
            };

            return $http(httpObj).then(function(result) {
                var foundItems = result.filter(function(item) {
                    return item.description.toLowerCase().includes(searchTerm);
                });

                return foundItems;
            });
        };
    }
})();
