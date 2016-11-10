(function () {
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.checkItems = function () {
            if (!$scope.items || $scope.items.length === 0) {
                $scope.response = 'Please enter data first';
				$scope.respColor = {'color': 'red'};
				$scope.borderColor = { 'border-color': 'red' };
                return;
            }

            var list = $scope.items.split(',');
            removeEmpties(list);

            if (list.length < 4) {
                $scope.response = 'Enjoy!';
            } else {
                $scope.response = 'Too much!';
            }
			$scope.respColor = {'color': 'green'};
			$scope.borderColor = { 'border-color': 'green' };
        };

        function removeEmpties(list) {
            for (var i = 0; i < list.length; i++) {
                list[i] = list[i].trim();
                if (list[i] === '') {
                    list.splice(i, 1);
                    i--;
                }
            }
        }
    }
})();
