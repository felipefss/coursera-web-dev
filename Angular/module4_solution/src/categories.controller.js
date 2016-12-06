(function() {
    angular.module('data')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) {
        var catCtrl = this;

        catCtrl.categories = categories;
    }
})();
