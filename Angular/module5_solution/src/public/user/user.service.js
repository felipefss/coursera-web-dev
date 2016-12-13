(function () {
  angular.module('public')
  .service('UserService', UserService);

  UserService.$inject = [];
  function UserService() {
    var service = this;
  }
})();
