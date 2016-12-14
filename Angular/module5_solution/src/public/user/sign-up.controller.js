(function () {
  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['UserService', 'MenuService'];
  function SignUpController(UserService, MenuService) {
    var signUpCtrl = this;
    var user = {};

    signUpCtrl.getMenuSingleItem = function() {
      MenuService.getSingleItem(signUpCtrl.favorite).then(function(response) {
        user = {
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

        signUpCtrl.gotRes = true;
      }).catch(function(err) {
        signUpCtrl.gotRes = false;
      });
    };

    signUpCtrl.submitForm = function () {
      UserService.saveUser(user);

      signUpCtrl.OK = true;
    };
  }
})();
