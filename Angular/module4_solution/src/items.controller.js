(function() {
    angular.module('data')
    .controller('ItemsListController', ItemsListController);

    ItemsListController.$inject = ['items'];
    function ItemsListController(items) {
        var itemsList = this;

        itemsList.items = items;
    }
})();
