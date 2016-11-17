(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var buy = this;

        // Initialize values
        ShoppingListCheckOffService.addItemsToBuy('Cookies', 10);
        ShoppingListCheckOffService.addItemsToBuy('Soft Drinks', 2);
        ShoppingListCheckOffService.addItemsToBuy('Salty Snacks', 7);
        ShoppingListCheckOffService.addItemsToBuy('Ice Cream', 4);
        ShoppingListCheckOffService.addItemsToBuy('Pretzels', 10);

        buy.list = ShoppingListCheckOffService.getToBuyList();

        buy.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.list = ShoppingListCheckOffService.getBoughtList();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyList = [];
        var boughtList = [];

        service.addItemsToBuy = function(itemName, itemQuantity) {
            var item = {
                name: itemName,
                quantity: itemQuantity
            };
            toBuyList.push(item);
        };

        service.buyItem = function(itemIndex) {
            var item = toBuyList.splice(itemIndex, 1);
            boughtList.push(item[0]);
        };

        service.getToBuyList = function() {
            return toBuyList;
        };

        service.getBoughtList = function() {
            return boughtList;
        };
    }
})();
