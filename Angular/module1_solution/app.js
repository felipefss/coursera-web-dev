(function () {
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.checkItems = function () {
      if (!$scope.items || $scope.items.length === 0) {
        $scope.response = 'Please enter data first';
        return;
      }

      var list = $scope.items.split(',');
      removeEmpties(list);

      if (list.length < 4) {
        $scope.response = 'Enjoy!';
      } else {
        $scope.response = 'Too much!';
      }
    };

    function removeEmpties(list) {
      for (var i = 0; i < list.length; i++) {
        if (list[i] === '') {
          list.splice(i, 1);
          i--;
        }
      }
    }
  }
})();
