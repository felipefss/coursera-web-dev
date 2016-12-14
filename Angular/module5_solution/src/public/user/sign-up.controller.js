(function () {
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService', 'MenuService'];
  function SignUpController(UserService, MenuService) {
    var signUpCtrl = this;

    var getMenuSingleItem = function() {
      return MenuService.getSingleItem(signUpCtrl.favorite).then(function (response) {
        return response;
      });
    };

    signUpCtrl.submitForm = function () {
      getMenuSingleItem().then(function(response) {
        var user = {
          firstName: signUpCtrl.firstName,
          lastName: signUpCtrl.lastName,
          email: signUpCtrl.email,
          favorite: signUpCtrl.favorite,
          favTitle: response.name,
          favDescription: response.description
        };

        if (signUpCtrl.phone) {
          user.phone = signUpCtrl.phone;
        }

        UserService.saveUser(user);

        signUpCtrl.gotRes = true;
      }).catch(function(err) {
        signUpCtrl.gotRes = false;
      });
    };
  }
})();
