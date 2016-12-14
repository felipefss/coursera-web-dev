(function () {
  angular.module('public')
  .service('UserService', UserService);

  UserService.$inject = [];
  function UserService() {
    var service = this;
    var savedUser = {};

    function newUser() {
      savedUser = {};
    }

    service.getUser = function () {
      return savedUser;
    };

    service.saveUser = function (user) {
      newUser();
      
      savedUser.firstName = user.firstName;
      savedUser.lastName = user.lastName;
      savedUser.email = user.email;
      savedUser.favorite = user.favorite;
      savedUser.favTitle = user.favTitle;
      savedUser.favDescription = user.favDescription;

      if (user.phone) {
        savedUser.phone = user.phone;
      }
    };
  }
})();
