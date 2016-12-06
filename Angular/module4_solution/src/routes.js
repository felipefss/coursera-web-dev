(function() {
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

        .state('home', {
            url: '/',
            templateUrl: 'src/templates/home.template.html'
        })

        .state('categories', {
            url: '/categories',
            templateUrl: 'src/templates/category-list.template.html',
            controller: 'CategoriesController as catCtrl',
            resolve: {
                categories: ['MenuDataService', function(MenuDataService) {
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        .state('items', {
            url: '/items/{shortName}',
            templateUrl: 'src/templates/items-list.template.html',
            controller: 'ItemsListController as itemsList',
            resolve: {
                items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                    return MenuDataService.getItemsForCategory($stateParams.shortName);
                }]
            }
        });
    }
})();
